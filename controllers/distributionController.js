const Astrologer = require('../models/Astrologer');
const User = require('../models/User');

const distributeUsers = async (req, res) => {
  const users = await User.find({ assignedAstrologer: null });
  const astrologers = await Astrologer.find();

  let totalWeight = astrologers.reduce((sum, ast) => sum + ast.weight, 0);

  for (const user of users) {
    let random = Math.random() * totalWeight;
    for (const astrologer of astrologers) {
      if (random < astrologer.weight) {
        user.assignedAstrologer = astrologer._id;
        astrologer.connections += 1;
        await user.save();
        await astrologer.save();
        break;
      }
      random -= astrologer.weight;
    }
  }

  res.send('Users distributed successfully');
};

const toggleTopAstrologer = async (req, res) => {
  const { astrologerId, isTop } = req.body;
  const astrologer = await Astrologer.findById(astrologerId);
  if (!astrologer) {
    return res.status(404).send('Astrologer not found');
  }

  astrologer.isTop = isTop;
  astrologer.weight = isTop ? astrologer.weight * 2 : astrologer.weight / 2;
  await astrologer.save();

  res.send(`Astrologer ${astrologer.name} is now ${isTop ? 'top' : 'normal'}`);
};

module.exports = { distributeUsers, toggleTopAstrologer };

### The flow distribution algorithm works as follows:
1) Fetch Users and Astrologers: Retrieve all users without an assigned astrologer and all astrologers.
2) Calculate Total Weight: Sum up the weights of all astrologers.
3) Assign Users to Astrologers: Iterate through each user and randomly assign them to an astrologer based on their weight.
4) Update Connections: Increment the connections count for each astrologer as users are assigned.

### When an astrologer's isTop status is toggled:
Their weight is adjusted (e.g., doubled if they are marked as top).This increases their likelihood of receiving more users.



# Flow Distribution Algorithm

## API Endpoints

### Distribute Users
**POST /api/distribute**
Distributes users to astrologers in a fair manner.

### Toggle Top Astrologer
**POST /api/toggle-top**
Toggle an astrologer's top status.

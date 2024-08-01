## Installation

1. Clone this repository: ``git clone https://github.com/blanatole/konolife-shop.git``
2. Run ``npm install --legacy-peer-deps`` command in all folder: ``Admin``, ``Client``, ``Server``
3. Setup cloudinary configration in ``Server`` folder -> ``.env`` file
4. Setup your MongoDB database ``CONNECTION_STRING`` in ``Server`` folder ->  ``.env`` file
5. Uncomment ``REACT_APP_BASE_URL = http://localhost:8000`` and comment ``REACT_APP_BASE_URL = https://konolife-server.onrender.com `` if you want to run locally in ``.env`` file of the ``Admin`` and ``Client`` folder.
6. Open 3 terminal
7. Command: ``cd server`` -> ``nodemon``
8. Command: ``cd client`` -> ``npm start``
9. command: ``cd admin`` -> ``npm start``

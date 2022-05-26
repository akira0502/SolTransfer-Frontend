export type Transfer = {
  "version": "0.1.0",
  "name": "transfer",
  "instructions": [
    {
      "name": "sendSolToAddr",
      "accounts": [
        {
          "name": "toAddress",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidAddress",
      "msg": "Invalid address"
    },
    {
      "code": 6001,
      "name": "NotAllowed",
      "msg": "Not allowed"
    },
    {
      "code": 6002,
      "name": "ZeroAmount",
      "msg": "Can't be zero amount"
    }
  ]
};

export const IDL: Transfer = {
  "version": "0.1.0",
  "name": "transfer",
  "instructions": [
    {
      "name": "sendSolToAddr",
      "accounts": [
        {
          "name": "toAddress",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidAddress",
      "msg": "Invalid address"
    },
    {
      "code": 6001,
      "name": "NotAllowed",
      "msg": "Not allowed"
    },
    {
      "code": 6002,
      "name": "ZeroAmount",
      "msg": "Can't be zero amount"
    }
  ]
};

export const maxLengthTests = [
  {
    description: 'maxLength validation',
    schema: { maxLength: 2 },
    tests: [
      {
        description: 'shorter is valid',
        data: 'f',
        valid: true
      },
      {
        description: 'exact length is valid',
        data: 'fo',
        valid: true
      },
      {
        description: 'too long is invalid',
        data: 'foo',
        valid: false
      },
      {
        description: 'ignores non-strings',
        data: 100,
        valid: true
      }
      // TODO make work?,
      // {
      //   'description': 'two supplementary Unicode code points is long enough',
      //   'data': '\uD83D\uDCA9\uD83D\uDCA9',
      //   'valid': true
      // }
    ]
  }
]

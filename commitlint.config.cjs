module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // New feature
        'fix', // Bug fix
        'docs', // Documentation
        'style', // Code style changes
        'refactor', // Code refactoring
        'test', // Test related
        'chore', // Maintenance tasks
        'perf', // Performance improvement
        'ci', // CI/CD changes
        'revert', // Revert changes
        'wip' // Work in progress
      ]
    ],
    'subject-case': [0],
    'header-max-length': [2, 'always', 120]
  }
}

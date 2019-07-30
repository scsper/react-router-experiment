export default function() {
  return {
    teams: {
      anaheim: {
        capsuleIds: ['ducks', 'angels'],
        name: 'Anaheim',
      },
      losAngeles: {
        capsuleIds: ['dodgers'],
        name: 'Los Angeles',
      },
    },
    capsules: {
      ducks: {
        teamId: 'anaheim',
        capsuleId: 'ducks',
        versions: ['1.0.2', '1.0.1', '1.0.0'],
      },
      angels: {
        teamId: 'anaheim',
        capsuleId: 'angels',
        versions: ['1.1.2', '1.1.1', '1.1.0'],
      },
      dodgers: {
        teamId: 'losAngeles',
        capsuleId: 'dodgers',
        versions: ['2.1.2', '2.1.1', '2.1.0'],
      },
    },
    configs: {
      'anaheim.ducks': {
        foo: 'bar',
      },
      'anaheim.angels': {
        foo: 'baz',
      },
      'losAngeles.dodgers': {
        bar: 'baz',
      },
    },
  }
}

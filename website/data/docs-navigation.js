// The root folder for this documentation category is `pages/docs`
//
// - A string refers to the name of a file
// - A "category" value refers to the name of a directory
// - All directories must have an "index.mdx" file to serve as
//   the landing page for the category, or a "name" property to
//   serve as the category title in the sidebar

export default [
  {
    category: 'intro',
    content: [
      {
        category: 'vs',
        content: ['proxies', 'custom'],
      },
    ],
  },

  {
    category: 'install',
    content: [
      { title: 'Sonrai Foo', href: '/docs/agent' },
      'glossary',
      'ports',
      'bootstrapping',
      'cloud-auto-join',
      'performance',
      { title: 'Kubernetes', href: '/docs/k8s' },
    ],
  },

  {
    category: 'connect',
    content: [
      'connect-internals',
      'configuration',
      {
        category: 'proxies',
        content: ['envoy', 'built-in', 'integrate'],
      },
      {
        category: 'registration',
        content: ['service-registration', 'sidecar-service'],
      },
      'intentions',
      'observability',
      {
        category: 'l7-traffic',
        content: ['discovery-chain'],
      },
      'connectivity-tasks',
      {
        category: 'gateways',
        content: [
          {
            category: 'mesh-gateway',
            content: ['wan-federation-via-mesh-gateways'],
          },

          'ingress-gateway',
          'terminating-gateway',
        ],
      },
      'nomad',
      { title: 'Kubernetes', href: '/docs/k8s/connect' },
      { category: 'native', content: ['go'] },
      {
        category: 'ca',
        content: ['consul', 'vault', 'aws'],
      },
      'dev',
    ],
  },
  {
    category: 'k8s',
    content: [
      {
        category: 'installation',
        content: [
          'helm',
          {
            category: 'platforms',
            name: 'Platform Guides',
            content: [
              {
                title: 'Minikube',
                href:
                  'https://learn.hashicorp.com/consul/kubernetes/minikube?utm_source=consul.io&utm_medium=docs&utm_content=k8s&utm_term=mk',
              },
              {
                title: 'AKS (Azure)',
                href:
                  'https://learn.hashicorp.com/consul/kubernetes/azure-k8s?utm_source=consul.io&utm_medium=docs&utm_content=k8s&utm_term=aks',
              },
              {
                title: 'EKS (AWS)',
                href:
                  'https://learn.hashicorp.com/consul/kubernetes/aws-k8s?utm_source=consul.io&utm_medium=docs&utm_content=k8s&utm_term=eks',
              },
              {
                title: 'GKE (Google Cloud)',
                href:
                  'https://learn.hashicorp.com/consul/kubernetes/google-cloud-k8s?utm_source=consul.io&utm_medium=docs&utm_content=k8s&utm_term=gke',
              },
              'self-hosted-kubernetes',
            ],
          },
          {
            category: 'deployment-configurations',
            name: 'Deployment Configurations',
            content: [
              'clients-outside-kubernetes',
              'servers-outside-kubernetes',
              'consul-enterprise',
            ],
          },
          {
            category: 'multi-cluster',
            content: ['kubernetes', 'vms-and-kubernetes'],
          },
        ],
      },
      'tls-on-existing-cluster',
      {
        category: 'connect',
        content: [
          'ingress-gateways',
          'terminating-gateways',
          'connect-ca-provider',
        ],
      },
      'service-sync',
      'dns',
      'ambassador',
      'upgrade',
      'uninstall',
    ],
  },
  {
    category: 'dynamic-app-config',
    name: 'Dynamic App Configuration',
    content: ['kv', 'sessions', 'watches'],
  },
  {
    category: 'agent',
    content: [
      'options',
      {
        category: 'config-entries',
        content: [
          'ingress-gateway',
          'proxy-defaults',
          'service-defaults',
          'service-resolver',
          'service-router',
          'service-splitter',
          'terminating-gateway',
        ],
      },
      'telemetry',
    ],
  },

  'partnerships',
  'download-tools',
  {
    category: 'upgrading',
    content: ['compatibility', 'upgrade-specific'],
  },
  {
    category: 'troubleshoot',
    name: 'Troubleshoot',
    content: ['common-errors', 'faq'],
  },
]

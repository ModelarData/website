// All copy for modelardata.com (English only).
// Facts come only from the original Wix site (copied 2026-10-22, commit 4f84d3f).
// Wording is tightened and typos fixed; no new claims, numbers, customers or certifications.
// REPO: facts and code from ModelarData's own public repository github.com/ModelarData/ModelarDB-RS
// (README and docs/user/README.md, read 2026-10-24).

export const company = {
  name: 'ModelarData',
  legalName: 'ModelarData ApS',
  product: 'ModelarDB',
  email: 'hello@modelardata.com',
  url: 'https://www.modelardata.com',
  country: 'DK',
  since: 2023, // "©2023 - 2026" on the original site
  github: 'https://github.com/ModelarData/ModelarDB-RS',
  docs: 'https://github.com/ModelarData/ModelarDB-RS#installation',
  cloneUrl: 'https://github.com/ModelarData/ModelarDB-RS.git',
  license: 'Apache-2.0', // REPO
} as const;

export const mail = {
  contact: `mailto:${company.email}`,
  demo: `mailto:${company.email}?subject=${encodeURIComponent('ModelarDB demo request')}`,
};

export const seo = {
  title: 'ModelarDB | Big and fast time-series data for renewable energy',
  description:
    'ModelarDB stores high-frequency sensor data economically: save up to 99% on storage, query compressed data with SQL, and deploy on edge, cloud and client. Open source.',
};

export const nav = [
  { href: '#solution', label: 'Solution' },
  { href: '#case-study', label: 'Case study' },
  { href: '#get-started', label: 'Get started' },
  { href: '#collaborators', label: 'Collaborators' },
  { href: '#about', label: 'About us' },
];

export const hero = {
  badges: ['Open source', 'Apache-2.0', 'Written in Rust'], // REPO
  h1: { before: 'ModelarDB for', shine: 'big and fast', after: 'time‑series data' }, // non-breaking hyphen
  sub: 'Manage millisecond sensor data economically and run analytics on both real-time and historical data, from edge to cloud to client.',
  primary: 'Get started',
  secondary: 'Star on GitHub',
  demo: 'Get a demo',
};

// REPO: snippets from docs/user/README.md (shortened, not changed).
export const codeTabs = [
  {
    id: 'sql',
    label: 'SQL',
    file: 'modelardb',
    lines: [
      { k: 'comment', t: '-- Lossless by default, or set a per-value error bound' },
      { k: 'code', t: 'CREATE TIME SERIES TABLE wind_turbine(' },
      { k: 'code', t: '  timestamp TIMESTAMP, wind_turbine TAG,' },
      { k: 'code', t: '  wind_direction FIELD, wind_speed FIELD(1.0%))' },
      { k: 'blank', t: '' },
      { k: 'code', t: 'SELECT * FROM wind_turbine LIMIT 5' },
    ],
  },
  {
    id: 'python',
    label: 'Python',
    file: 'example.py',
    lines: [
      { k: 'code', t: 'import modelardb' },
      { k: 'blank', t: '' },
      { k: 'comment', t: '# A data folder on a local disk' },
      { k: 'code', t: 'local_data_folder = modelardb.open_local(data_folder_path)' },
      { k: 'blank', t: '' },
      { k: 'comment', t: '# Or a modelardbd instance' },
      { k: 'code', t: 'modelardb_node = modelardb.connect(url)' },
    ],
  },
  {
    id: 'docker',
    label: 'Docker',
    file: 'terminal',
    lines: [
      { k: 'prompt', t: 'git clone https://github.com/ModelarData/ModelarDB-RS' },
      { k: 'prompt', t: 'cd ModelarDB-RS' },
      { k: 'prompt', t: 'docker-compose -p modelardb-single -f docker-compose-single.yml up' },
      { k: 'comment', t: '# Single edge node on port 9999' },
    ],
  },
];

// Numbers only from the original site.
export const stats = [
  { value: '99%', label: 'up to, less storage than Apache Parquet' },
  { value: '100 Hz', label: 'store all sensor data at high frequency, e.g. 10, 50 or 100 Hz' },
  { value: 'SQL', label: 'queries run directly on compressed data' },
  { value: 'Edge → Cloud', label: 'collect, compress, transfer, query' },
];

export const builtOn = ['Rust', 'Apache Arrow', 'Arrow Flight', 'Apache DataFusion', 'Apache Parquet']; // REPO

export const why = {
  h2: 'Why ModelarDB',
  points: [
    { icon: 'activity', text: 'Manage millisecond sensor data economically' },
    { icon: 'chart-line', text: 'Run analytics on both real-time and historical data' },
    { icon: 'hard-drive', text: 'Save up to 99% on storage' },
    { icon: 'network', text: 'Deploy flexibly across edge, cloud and client' },
    { icon: 'code-xml', text: 'Open source, with paid enterprise features and support' },
  ],
};

export const caseStudy = {
  h2: 'Case study: ModelarDB for wind and solar farms',
  items: [
    {
      icon: 'layers',
      title: 'High-frequency datasets',
      points: [
        'Store and use all available sensor data at high frequency, e.g. 10, 50 or 100 Hz',
        'Efficient analytics on historical data',
        'Real-time analytics',
      ],
    },
    {
      icon: 'monitor',
      title: 'Monitor details',
      points: [
        'Collect data across all turbines and parks',
        'All sensor data is collected and transferred automatically',
      ],
    },
    {
      icon: 'lightbulb',
      title: 'Enable insight',
      points: [
        'Use high-frequency data to detect problems such as yaw misalignment, blade pitch position and PV panel soiling',
      ],
    },
    {
      icon: 'piggy-bank',
      title: 'Cost savings',
      points: ['Save up to 99% on storage compared with Apache Parquet'],
    },
  ],
};

export const getStarted = {
  h2: 'Get started',
  sub: 'ModelarDB is open source under the Apache-2.0 licence. Clone the repository, build with Cargo or start a single edge node with Docker, and follow the installation guide.',
  links: [
    { icon: 'git-branch', label: 'GitHub', href: company.github },
    { icon: 'book-open', label: 'Documentation', href: company.docs },
  ],
};

export const developers = {
  h2: 'Why developers use ModelarDB',
  features: [
    {
      icon: 'archive',
      title: 'Compression',
      text: 'Reduce storage costs by up to 99% by compressing petabytes of time-series data efficiently and effectively. Data can be compressed losslessly or within a user-defined error bound.',
    },
    {
      icon: 'file-code',
      title: 'Python library',
      text: 'Read and write compressed time-series data directly in Python. Store the data in ModelarDB or in files, and analyze it with standard Python tools such as Jupyter, Pandas and PyTorch.',
    },
    {
      icon: 'database',
      title: 'Full power of SQL',
      text: 'Run analytics with the full power of SQL; queries are executed transparently, directly on the compressed data.',
    },
    {
      icon: 'cloud-upload',
      title: 'Flexible deployment',
      text: 'Data is collected on the edge (e.g. wind turbines), compressed, and continuously transferred to the cloud, from where the client can query all of it.',
    },
  ],
};

// Logos as uploaded to the original site; names as printed on each logo.
export const collaborators = {
  h2: 'Collaborators',
  logos: [
    { file: 'aau', name: 'Aalborg University' },
    { file: 'athena', name: 'Athena – Information Management Systems Institute' },
    { file: 'darwin', name: "Darwin – ENGIE's software for renewables" },
    { file: 'ibm', name: 'IBM' },
    { file: 'inaccess', name: 'Inaccess' },
    { file: 'perception', name: 'Perception Dynamics' },
  ],
};

export const about = {
  h2: 'About us',
  body: [
    'ModelarData is a small, research-based deep-tech company in Denmark. It employs the creators of the ModelarDB project and offers support, consulting services and enterprise features for the system.',
  ],
};

// Order as on the original site. Christian Schmidt Godiksen has no photo there (placeholder avatar).
export const team = [
  { name: 'Harry Xuegang Huang', role: 'Chief Executive Officer', photo: 'harry-huang' },
  { name: 'Torben Bach Pedersen', role: 'Chief Scientific Officer', photo: 'torben-bach-pedersen' },
  { name: 'Søren Kejser Jensen', role: 'Chief Technology Officer', photo: 'soren-kejser-jensen' },
  { name: 'Christian Schmidt Godiksen', role: 'Head Developer', photo: null },
  { name: 'Christian Thomsen', role: 'Chief Data Officer', photo: 'christian-thomsen' },
] as const;

export const contact = {
  h2: 'Get a demo',
  sub: 'For more information or a demo, get in touch with us by e-mail.',
};

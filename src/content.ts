// All copy for modelardata.com (English only).
// Facts come only from the original Wix site (copied 2026-10-22, commit 4f84d3f).
// Wording is tightened and typos fixed; no new claims, numbers, customers or certifications.
// REPO: facts and code from ModelarData's own public repository github.com/ModelarData/ModelarDB-RS
// (README and docs/user/README.md, read 2026-10-24).
// DECK: facts from the owner's pitch deck reference/PitchModelarDataOctober2026.pdf (October 2026).
// Investor-only items from the deck (market estimate, grant amounts, planned pilots, VC plans) are deliberately left out.

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
    'ModelarDB compresses high-frequency sensor data with models and a per-value error bound: up to 99% less storage than Apache Parquet, outliers kept, queried with SQL or Python. Open source.',
};

export const nav = [
  { href: '#solution', label: 'Why ModelarDB' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#benchmarks', label: 'Benchmarks' },
  { href: '#enterprise', label: 'Enterprise' },
  { href: '#about', label: 'Team' },
];

export const hero = {
  badges: ['Open source', 'Apache-2.0', 'Written in Rust'], // REPO
  h1: { before: 'ModelarDB for', shine: 'big and fast', after: 'time‑series data' }, // non-breaking hyphen
  sub: 'Model-based compression with a per-value error bound: keep all your high-frequency sensor data at up to 99% lower storage cost, keep the outliers, and query it with SQL or Python, from edge to cloud to client.', // DECK
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

// DECK: compression benchmarks slide (10 Hz energy data vs Apache Parquet).
export const stats = [
  { value: '>100×', label: 'compression with small errors' },
  { value: '99.96%', label: 'smaller than Apache Parquet at a 10% error bound' },
  { value: '89.44%', label: 'smaller than Apache Parquet, lossless (0% error bound)' },
  { value: '100 Hz', label: 'keep all sensor data at high frequency: 10, 50 or 100 Hz' },
];

export const builtOn = ['Rust', 'Apache Arrow', 'Arrow Flight', 'Apache DataFusion', 'Apache Parquet']; // REPO

// DECK: "Why ModelarDB" slide.
export const why = {
  h2: 'Why ModelarDB',
  points: [
    { icon: 'activity', text: 'Manage millisecond sensor data economically' },
    { icon: 'chart-line', text: 'Run analytics on both real-time and historical data' },
    { icon: 'hard-drive', text: 'Save up to 99% on storage' },
    { icon: 'file-code', text: 'Low entry barrier with a simple Python library' },
    { icon: 'network', text: 'Add a scalable edge–cloud solution for complex scenarios' },
    { icon: 'code-xml', text: 'Open-source core with paid enterprise features and support' },
  ],
};

// DECK: "Key idea: model-based compression" slide.
export const keyIdea = {
  h2: 'Key idea: model‑based compression', // non-breaking hyphen
  sub: 'ModelarDB represents time series as models, such as constant and linear functions, within an error bound you choose for every value.', // REPO + DECK
  panels: [
    { kind: 'raw', title: 'Raw data points', text: 'Way too much data to feasibly transfer and store.' },
    { kind: 'agg', title: 'Current solution: aggregates', text: 'No error bound, so outliers are lost.' },
    { kind: 'model', title: 'ModelarDB: error-bounded models', text: 'A per-value error bound, so outliers are kept.' },
  ],
  usp: 'What makes it unique: several compression methods combined and integrated into one complete platform.',
};

// DECK: slides "a) Without ModelarDB", "b) With ModelarDB Python Library", "c) With Library Plus Full ModelarDB".
export const deployModes = {
  h2: 'Start small, scale to the edge',
  sub: 'Begin with the Python library, then add the full ModelarDB from edge to cloud.',
  modes: [
    {
      id: 'without',
      tab: 'Without ModelarDB',
      title: 'All raw data, everywhere',
      points: [
        'Edge nodes send all raw data, limited by bandwidth',
        'Much cloud storage, at a high cost',
        'Clients pull large amounts of data to query and analyze',
      ],
    },
    {
      id: 'library',
      tab: 'With the Python library',
      title: 'Less cloud storage, models to the client',
      points: [
        'Data is stored in the cloud as compressed models: less cloud storage',
        'Clients with the library receive the relevant data as models',
        'Nothing changes at the edge',
      ],
    },
    {
      id: 'full',
      tab: 'Library plus full ModelarDB',
      title: 'Models from edge to client',
      points: [
        'All data is compressed on the edge and sent as models',
        'Queries are pushed to the edge and the cloud',
        'Clients receive relevant data as models or query results',
      ],
    },
  ],
};

// DECK: "Compression benchmarks" slide. Sizes in GiB, per-value guaranteed error bound in %.
// The deck does not name the two data sets.
export const benchmarks = {
  h2: 'Compression benchmarks',
  points: [
    'Very high (more than 100 times) compression with small errors',
    'Compression does not harm downstream analytics',
    'Apache Parquet is the industry-standard compressed format',
  ],
  sets: [
    {
      name: 'Data set 1',
      rows: [
        { system: 'Cassandra', bound: '0%', gib: 84.48 },
        { system: 'Parquet', bound: '0%', gib: 64.42 },
        { system: 'ORC', bound: '0%', gib: 12.69 },
        { system: 'InfluxDB', bound: '0%', gib: 4.87 },
        { system: 'ModelarDB', bound: '0%', gib: 0.98 },
        { system: 'ModelarDB', bound: '1%', gib: 0.79 },
        { system: 'ModelarDB', bound: '5%', gib: 0.78 },
        { system: 'ModelarDB', bound: '10%', gib: 0.75 },
      ],
    },
    {
      name: 'Data set 2',
      rows: [
        { system: 'Cassandra', bound: '0%', gib: 129.37 },
        { system: 'Parquet', bound: '0%', gib: 92.77 },
        { system: 'ORC', bound: '0%', gib: 20.54 },
        { system: 'InfluxDB', bound: '0%', gib: 19.78 },
        { system: 'ModelarDB', bound: '0%', gib: 12.59 },
        { system: 'ModelarDB', bound: '1%', gib: 12.1 },
        { system: 'ModelarDB', bound: '5%', gib: 9.87 },
        { system: 'ModelarDB', bound: '10%', gib: 8.0 },
      ],
    },
  ],
  table: {
    caption: '10 Hz energy data: ModelarDB Python library vs Apache Parquet',
    rows: [
      { solution: 'Apache Parquet', size: '3174.4 MiB', reduction: '–' },
      { solution: 'Library, error bound 0%', size: '335 MiB', reduction: '89.44%' },
      { solution: 'Library, error bound 1%', size: '13 MiB', reduction: '99.59%' },
      { solution: 'Library, error bound 5%', size: '2.2 MiB', reduction: '99.93%' },
      { solution: 'Library, error bound 10%', size: '1.4 MiB', reduction: '99.96%' },
    ],
  },
};

export const caseStudy = {
  h2: 'Use case: wind and solar farms',
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
        'Detect problems such as yaw misalignment, blade pitch position and PV panel soiling, directly on compressed data',
      ],
    },
    {
      icon: 'piggy-bank',
      title: 'Cost savings',
      points: ['Save up to 99% on storage compared with Apache Parquet'],
    },
  ],
};

// DECK: "Paid Features and Services", "Ongoing development" and "Our open source core concept" slides.
export const enterprise = {
  h2: 'Open-source core, enterprise ready',
  sub: 'The ModelarDB core is open source under the Apache License 2.0, which allows usage and further development and gives users trust and stability. ModelarData offers an enterprise edition and services on top.',
  paid: {
    title: 'Enterprise edition and services',
    items: [
      { icon: 'file-badge', text: 'Enterprise edition under a commercial licence' },
      { icon: 'shield-check', text: 'Enterprise security: identity and access management (IAM), multi-factor authentication (MFA), role-based access control (RBAC)' },
      { icon: 'puzzle', text: 'Integration with more tools, e.g. MATLAB, R and Julia' },
      { icon: 'layout-dashboard', text: 'Graphical user interface to query, administrate and monitor ModelarDB' },
      { icon: 'package', text: 'Precompiled binaries with frequent updates' },
      { icon: 'life-buoy', text: 'Support, consultancy, custom development and training' },
    ],
  },
  roadmap: {
    title: 'In development',
    items: [
      'Manager runs on all computers: no single point of failure',
      'An on-disk copy of the data lets ModelarDB recover from failure',
      'Only authenticated and authorized access',
      'Few large files instead of many small files',
      'Graphical user interface',
    ],
  },
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

// Logos as uploaded to the original site; names as printed on each logo (Inaccess renamed, per DECK).
export const collaborators = {
  h2: 'Collaborators',
  // DECK: "Collaborators" slide.
  projects: ['ENGIE', 'Power Factors (formerly Inaccess), monitoring of solar farms', 'IBM Research'],
  advisors: [
    { name: 'Mikael Frank', role: 'Head of Operational Technology, Ørsted' },
    { name: 'Emil Hedevang', role: 'Senior Data Scientist, Siemens Gamesa Renewable Energy (now part of Siemens Energy)' },
  ],
  // DECK: "Funding" slide; amounts left out.
  funding: [
    'EU Horizon 2020 MORE',
    'Innovation Fund Denmark Innobooster 2023 and 2025',
    'CET Partnership TwinRE (2026–2029)',
    'Horizon Europe TwinD (2027–2030)',
  ],
  logos: [
    { file: 'aau', name: 'Aalborg University' },
    { file: 'athena', name: 'Athena – Information Management Systems Institute' },
    { file: 'darwin', name: "Darwin – ENGIE's software for renewables" },
    { file: 'ibm', name: 'IBM' },
    { file: 'inaccess', name: 'Power Factors (formerly Inaccess)' },
    { file: 'perception', name: 'Perception Dynamics' },
  ],
};

export const about = {
  h2: 'About us',
  body: [
    'ModelarData is a small, research-based deep-tech company in Denmark. It employs the creators of the ModelarDB project and offers support, consulting services and enterprise features for the system.',
  ],
};

// DECK: "Our Team" slide (order, titles, bios; photos of Harry, Christian S. G. and Torben from the deck).
export const team: { name: string; role: string; photo: string | null; bio: string }[] = [
  {
    name: 'Harry Xuegang Huang, Ph.D.',
    role: 'Chief Executive Officer',
    photo: 'harry-huang',
    bio: '15 years in the Danish IT industry as chief IT architect and developer at Danske Bank, PFA Pension, Nationalbanken, KMD, Energinet, Maersk and Novo Nordisk.',
  },
  {
    name: 'Christian Schmidt Godiksen',
    role: 'Lead Developer',
    photo: 'christian-schmidt-godiksen',
    bio: 'Full-time full-stack software development. M.Sc. in Computer Science, Aalborg University.',
  },
  {
    name: 'Torben Bach Pedersen, Ph.D.',
    role: 'Chief Scientific Officer',
    photo: 'torben-bach-pedersen',
    bio: 'Professor in data management, Aalborg University. ACM Distinguished Scientist, IEEE Distinguished Contributor, Honorary Doctorate (TU Dresden), ATV member.',
  },
  {
    name: 'Christian Thomsen, Ph.D.',
    role: 'Chief Data Officer',
    photo: 'christian-thomsen',
    bio: 'Associate Professor in data management, Aalborg University.',
  },
  {
    name: 'Søren Kejser Jensen, Ph.D.',
    role: 'Chief Technology Officer',
    photo: 'soren-kejser-jensen',
    bio: 'Tenure Track Assistant Professor in data, Aalborg University.',
  },
];

export const contact = {
  h2: 'Get a demo',
  sub: 'For more information or a demo, get in touch with us by e-mail.',
};

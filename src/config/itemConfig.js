export const subCategoryOptions = {
  Electronic: [
    "Charger",
    "Battery",
    "Laptop",
    "Dongle",
    "Device",
    "Cable",
    "Comuter Peripheral",
  ],
  Tool: ["Hand Tool", "Power Tool", "Electrical Tool", "Measuring", "Device"],
  Camping: [
    "Cooking",
    "Sleeping",
    "Furniture",
    "Survival",
    "Fuel",
    "Electronic",
    "Lighting",
  ],
  Furniture: ["Lights"],
  Travel: ["Organization"],
  Hardware: ["Fasteners"],
  Toiletries: [
    "Soap and Bodywash",
    "Sunscreen",
    "Toothbrush",
    "Bug Spray",
    "Femenine Product",
    "Shaving",
  ],
  Cleaning: ["Air Fresheners"],
};

export const categoryOptions = [
  "Electronic",
  "Camping",
  "Tool",
  "Travel",
  "Hardware",
  "Toiletries",
  "Cleaning",
  "Furniture",
];

export const itemCategorySelectOptions = [
  { value: "Travel", label: "Travel" },
  { value: "Electronic", label: "Electronic" },
  { value: "Camping", label: "Camping" },
  { value: "Hardware", label: "Hardware" },
  { value: "Tool", label: "Tool" },
  { value: "Toiletries", label: "Toiletries" },
  { value: "Cleaning", label: "Cleaning" },
];

export const unitOfMeasureOptions = [
  { value: "units", label: "Units (generic)" },
  { value: "Fl. OZ.", label: "Fl. OZ." },
  { value: "mL", label: "mL" },
  { value: "g", label: "Grams" },
  { value: "lbs", label: "lbs." },
];

export const callTypeOptions = [
  { value: "pov", label: "POV" },
  { value: "discovery", label: "Discovery" },
  { value: "demo", label: "Demo" },
  { value: "wrapUp", label: "Wrap Up" },
  { value: "internalPrep", label: "Internal Preparation" },
  { value: "valueAssessment", label: "Value Assessment" },
  { value: "scoping", label: "Scoping" },
];

export const progressOptions = [
  {
    value: "notStarted",
    label: "Not Started",
    className: "far fa-circle",
    color: "subtleRedAlert",
  },
  {
    value: "inProgress",
    label: "In Progress",
    className: "fas fa-sync-alt",
    color: "lynxOrangeText",
  },
  {
    value: "completed",
    label: "Completed",
    className: "far fa-check-circle",
    color: "lynxBlueGreenText",
  },
  {
    value: "blocked",
    label: "Blocked",
    className: "far fa-stop-circle",
    color: "lynxRedText",
  },
];

export const stageTypes = {
  1: "Active prospect",
  2: "Demo",
  3: "Commitment to POV",
  4: "POV Started",
  5: "Connectivity Complete",
  6: "Tech Win",
  7: "Purchase Process",
  8: "Won",
  20: "On Hold",
  21: "Tech Loss",
};

export const stageTypesOptionList = [
  { value: 1, label: "Active prospect" },
  { value: 2, label: "Demo" },
  { value: 3, label: "Commitment to POV" },
  { value: 4, label: "POV Started" },
  { value: 5, label: "Connectivity Complete" },
  { value: 6, label: "Tech Win" },
  { value: 7, label: "Purchase Process" },
  { value: 8, label: "Closed Won" },
  { value: 9, label: "Closed Lost" },
  { value: 20, label: "On Hold" },
  { value: 30, label: "Tech Loss" },
];

export const cdOptionsList = [
  { value: "jenkins", label: "Jenkins" },
  { value: "homegrown", label: "Homegrown" },
  { value: "teamCity", label: "Team City" },
  { value: "spinnaker", label: "Spinnaker" },
  { value: "gitHub", label: "GitHub" },
  { value: "gitLab", label: "GitLab" },
  { value: "ocotpusDeploy", label: "Ocotpus Deploy" },
  { value: "argoCD", label: "Argo CD" },
  { value: "armory", label: "Armory" },
];
export const ciOptionsList = [
  { value: "jenkins", label: "Jenkins" },
  { value: "homegrown", label: "Homegrown" },
  { value: "gitLab", label: "Git Lab" },
  { value: "gitHub", label: "Git Hub" },
  { value: "travisCI", label: "Travis CI" },
  { value: "azureDevOps", label: "Azure Dev Ops" },
  { value: "codeFresh", label: "Code Fresh" },
  { value: "buildKite", label: "Build Kite" },
  { value: "cloud Bees", label: "Cloud Bees" },
  { value: "jenkins X", label: "Jenkins X" },
  { value: "concourse CI", label: "Concourse CI" },
];

export const ffOptionsList = [
  { value: "homegrown", label: "Homegrown" },
  { value: "launchDarkly", label: "Launch Darkly" },
  { value: "cloudBees", label: "Cloud Bees" },
  { value: "optimizely", label: "Optimizely" },
  { value: "split", label: "Split" },
];
export const ccmOptionsList = [
  { value: "homegrown", label: "Homegrown" },
  { value: "awsCostExplorer", label: "AWS Cost Explorer" },
  { value: "apptio", label: "Apptio" },
  { value: "azure Cost Management", label: "Azure Cost Management" },
  { value: "googleCloudBilling", label: "Google Cloud Billing" },
  { value: "kubecost", label: "Kubecost" },
  { value: "cloudHealth", label: "Cloud Health" },
  { value: "spotio", label: "spot.io" },
];
export const languageOptionsList = [
  { value: "Go", label: "Go" },
  { value: "javaScript", label: "JavaScript" },
  { value: "nodejs", label: "Node.js" },
  { value: "python", label: "Python" },
  { value: "ruby", label: "Ruby" },
  { value: "dotNet", label: ".NET" },
  { value: "java", label: "Java" },
  { value: "iOS", label: "iOS" },
  { value: "android", label: "Android" },
  { value: "flutter", label: "Flutter" },
  { value: "reactNative", label: "React Native" },
];
export const deploymentTargetOptionsList = [
  { value: "kubernetes", label: "Kubernetes" },
  { value: "ec2", label: "EC2" },
  { value: "ecs", label: "ECS" },
  { value: "lambda", label: "Lambda" },
  { value: "serverlessFramework", label: "Serverless Framework" },
  { value: "s3", label: "S3" },
  { value: "terraform", label: "Terraform" },
  { value: "onPrem", label: "On Prem" },
  { value: "mobile", label: "Mobile" },
];

export const unitOfDeploymentOptionsList = [
  { value: "dockerImage", label: "Docker image" },
  { value: "warFile", label: "WAR File" },
  { value: "jarFile", label: "JAR File" },
  { value: "staticS3App", label: "Static S3 App" },
  { value: "kubernetes", label: "Kubernetes" },
];

export const actionItemStatusStages = {
  notStarted: "Not Started",
  inProgress: "In Progress",
  completed: "Completed",
  blocked: "Blocked",
};

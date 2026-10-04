import type { Industry } from "./types";

export const agriculture: Industry = {
  title: "Agriculture",
  slug: "agriculture",
  tagline: "Precision technology that turns field data into decisions",
  description:
    "Developing agricultural technology solutions that improve farm management, supply chain visibility and data-driven farming decisions, from field sensing and precision inputs to full lot-level traceability.",
  metaDescription:
    "BLACK VAVE CORPORATION builds agritech platforms for farming operations: IoT field sensing, satellite crop intelligence and full lot-level traceability.",
  icon: "Leaf",
  theme: {
    accent: "#5FBF4A",
    accentLight: "#85DA72",
    accentDark: "#439638",
    tint: "rgba(95, 191, 74, 0.08)",
  },

  hero: {
    headline: "Farming Technology Built For Real Field Conditions",
    subheadline:
      "We engineer farm management, sensing and traceability systems that hold up in dust, heat and low connectivity, and that turn a season of field data into decisions worth acting on.",
  },

  stats: [
    { value: "Field To Trace", label: "End To End Supply Chain Visibility" },
    { value: "< 6 weeks", label: "To First Working Field Pilot" },
    { value: "24/7", label: "Sensor Data Monitoring And Alerting" },
    { value: "99.9%", label: "Platform Availability Target" },
  ],

  challenges: [
    {
      icon: "HardDrive",
      title: "Farm Data Spread Across Incompatible Systems",
      description:
        "Tractor telematics, irrigation controllers, spreadsheets, lab reports and agronomy records live in separate systems with no common identifier, so a field's full history cannot be reconstructed without manual effort.",
    },
    {
      icon: "Cloud",
      title: "Connectivity And Power Are Unreliable",
      description:
        "Many operational areas have no cellular coverage and no mains power. Software that assumes constant connectivity fails at exactly the moment it is needed most, in the field during a narrow planting or harvest window.",
    },
    {
      icon: "Factory",
      title: "Narrow Seasonal Decision Windows",
      description:
        "Irrigation, fertiliser, spraying and harvest decisions can only be made inside a few days each season. A late recommendation is worthless, so insight that arrives after the window closes delivers no agronomic value at all.",
    },
    {
      icon: "Boxes",
      title: "Traceability And Food Safety Expectations",
      description:
        "Processors, retailers and exporters increasingly require lot-level traceability, documented handling and recall readiness. Paper records and disconnected systems cannot produce that evidence quickly when it is needed.",
    },
    {
      icon: "Leaf",
      title: "Sustainability And Regulatory Scrutiny",
      description:
        "Water abstraction limits, input restrictions, emissions reporting and buyer sustainability commitments are tightening. Compliance evidence has to come from operational systems rather than being reconstructed from documentation each year.",
    },
  ],

  approach: [
    {
      title: "Field-Level Discovery With Operators And Agronomists",
      description:
        "We work on the ground with growers, agronomists and operations staff, mapping current practices, existing equipment and the decisions that actually get made. Requirements trace back to observed operations rather than assumptions made from a desk.",
    },
    {
      title: "Field Connectivity And Offline-First Design",
      description:
        "Mobile tools capture and sync opportunistically, store operations run locally at the edge, and sensor networks use low-power wide-area links with buffering so no observation is lost when the network drops.",
    },
    {
      title: "Unified Data Foundation",
      description:
        "Field boundaries, equipment, inputs, weather, imagery and lab results are normalised into one model with consistent identifiers, which is the precondition for any reliable analysis or traceability claim.",
    },
    {
      title: "Agronomic Models And Decision Support",
      description:
        "Crop models, imagery analysis and machine learning produce recommendations with the evidence attached, tuned with your agronomists and validated against measured yield outcomes before they influence input spending.",
    },
    {
      title: "Pilot On Real Acres, Then Scale",
      description:
        "We start with a defined block and a small number of crops, compare results against the existing practice, and expand only once the economics hold. Lessons from the pilot feed directly into rollout planning for the whole operation.",
    },
  ],

  products: [
    {
      icon: "LayoutDashboard",
      title: "Integrated Farm Management Information System",
      description:
        "The operational record for the whole farm: fields, crop plans, input applications, work logs, labour and yields in one system. Everything downstream, from compliance reporting to traceability, draws from this single model.",
      features: [
        "Field boundary, crop rotation and planting record management",
        "Input application logging with batch, rate and operator capture",
        "Work orders, labour planning and machinery assignment",
        "Yield and harvest reconciliation at field and block level",
      ],
    },
    {
      icon: "Network",
      title: "Field Sensor Network And Microclimate Platform",
      description:
        "A managed sensor deployment covering soil moisture and temperature, microclimate, irrigation pressure and asset status. Data streams into the platform continuously and triggers alerts when thresholds are crossed.",
      features: [
        "Soil moisture, temperature, EC and pH sensing at multiple depths",
        "On-site weather, leaf wetness and frost risk monitoring",
        "LoRaWAN and cellular gateways with offline buffering",
        "Configurable threshold and anomaly alerting by field and sensor",
      ],
    },
    {
      icon: "Eye",
      title: "Satellite And Drone Crop Intelligence Service",
      description:
        "Aerial imagery acquisition and processing that converts raw captures into agronomic signal. Vegetation indices, emergence maps, stress detection and stand counts are published as actionable, field-level layers.",
      features: [
        "Multispectral satellite and drone image capture and processing",
        "NDVI, NDRE and custom vegetation index time series per field",
        "Emergence, canopy cover and stand count mapping",
        "Anomaly and stress detection with GPS-located evidence",
      ],
    },
    {
      icon: "Target",
      title: "Precision Agriculture Decision Engine",
      description:
        "Variable rate prescription generation and agronomic recommendations that turn measurement into input decisions. Recommendations are constrained by machinery capability and delivered in formats operators can execute.",
      features: [
        "Variable rate prescriptions for seed, fertiliser and crop protection",
        "Zone management from soil maps, yield history and imagery layers",
        "Yield gap analysis comparing potential against actual performance",
        "ISOBUS and ISO 11783 compatible prescription export",
      ],
    },
    {
      icon: "Boxes",
      title: "Agri-Food Supply Chain Traceability Platform",
      description:
        "Lot and batch traceability from field through packing, storage and processing. Operators capture chain-of-custody events at the point they happen, so recall scope is known in minutes rather than days.",
      features: [
        "Lot, batch and container genealogy with full chain of custody",
        "GS1 and customer-specific barcoding and label generation",
        "Supplier and input traceability from seed to harvest",
        "Recall simulation, mock drills and audit reporting",
      ],
    },
    {
      icon: "Wrench",
      title: "Farm Machinery And Asset Operations Platform",
      description:
        "Telematics ingestion, maintenance scheduling and asset utilisation for tractors, combines, irrigation sets and transport. Downtime and cost per acre become visible instead of being absorbed into seasonal estimates.",
      features: [
        "Telematics ingestion from major machinery and implement brands",
        "Preventive maintenance scheduling with parts and service history",
        "Fuel, idle time and cost per hectare reporting",
        "Operator assignment and work order tracking across equipment",
      ],
    },
  ],

  services: [
    "software-engineering",
    "data-analytics",
    "ai-automation",
    "cloud-devops",
    "digital-experience",
  ],

  useCases: [
    {
      icon: "Cloud",
      title: "Precision Irrigation Scheduling",
      description:
        "Soil moisture, weather and crop stage data drive irrigation recommendations and valve-level set points, reducing water applied to fields that do not need it and preventing crop stress during sensitive stages.",
    },
    {
      icon: "TrendingUp",
      title: "Variable Rate Input Application",
      description:
        "Prescription maps generated from soil survey, yield history and imagery drive seed, fertiliser and crop protection application, so inputs follow productivity rather than a flat field-wide rate.",
    },
    {
      icon: "Search",
      title: "Yield Gap And Performance Analysis",
      description:
        "Compare actual yield against modelled potential across fields and seasons, isolate the agronomic factors behind the gap, and direct agronomy attention where it changes the harvest.",
    },
    {
      icon: "Monitor",
      title: "Cold Chain And Storage Monitoring",
      description:
        "Continuous temperature, humidity and power monitoring across storage and transport with excursion alerts, protecting product quality and providing the evidence buyers now request.",
    },
    {
      icon: "Scale",
      title: "Sustainability And Emissions Measurement",
      description:
        "Field-level activity data underpins input, fuel, water and soil carbon accounting, so sustainability commitments and reporting obligations rest on measured operations rather than estimates.",
    },
    {
      icon: "Container",
      title: "Farm Logistics And Produce Traceability",
      description:
        "Coordinate harvest windows, transport and receiving slots across farm, packhouse and buyer, with chain-of-custody events captured at each handover.",
    },
  ],

  compliance: [
    "GDPR for farm owner, worker and contract data",
    "ISO 22000 and HACCP food safety management where applicable",
    "FSSAI food safety standards and US FSMA Preventive Controls for Human Food",
    "Water abstraction, discharge and environmental regulations",
    "Drone aviation regulations such as DGCA approvals and FAA Part 107 certification",
    "Sustainability and emissions reporting standards including the GHG Protocol",
  ],

  technologyCategories: [
    {
      category: "Field IoT And Sensors",
      items: [
        "Soil Moisture and Temperature Probes",
        "Microclimate and Weather Stations",
        "LoRaWAN and NB-IoT Gateways",
        "LoRa and NB-IoT Radio Modules",
        "Tank, Silo and Irrigation Pressure Sensors",
        "Edge Buffering Devices",
      ],
    },
    {
      category: "Imaging And Spatial Analytics",
      items: [
        "Multispectral Satellite Imagery",
        "Fixed-wing and Multirotor Drone Capture",
        "NDVI, NDRE and LAI Index Processing",
        "GIS and Geospatial Data Stacks",
        "Photogrammetry and Point Cloud Processing",
      ],
    },
    {
      category: "Farm Software Platforms",
      items: [
        "React and Next.js Field Web",
        "Offline-First Mobile Applications",
        "Node.js and Python Services",
        "PostgreSQL and Timeseries Storage",
        "Farm Management and ERP Integration",
      ],
    },
    {
      category: "Data, AI And Analytics",
      items: [
        "Weather and Agro APIs",
        "Crop Growth Models",
        "Machine Learning for Yield Prediction",
        "Time Series and Spatial Data Stores",
        "Power BI and Embedded Dashboards",
      ],
    },
    {
      category: "Infrastructure And Integration",
      items: [
        "AWS and Azure IoT Services",
        "Docker and Kubernetes",
        "Terraform IaC",
        "ISOBUS and ISO 11783 Integration",
        "Machinery Telematics APIs",
        "Cold Chain Monitoring Devices",
      ],
    },
  ],

  outcomes: [
    {
      icon: "DollarSign",
      title: "Lower Input Cost Per Hectare",
      description:
        "Targeted application of seed, fertiliser, crop protection and irrigation reduces spend on fields that were already performing, without sacrificing yield.",
    },
    {
      icon: "Gauge",
      title: "Higher Yield And Better Quality Consistency",
      description:
        "Earlier detection of stress, disease and water deficit, acted on within the season, translates directly into harvest performance and grade consistency.",
    },
    {
      icon: "Globe",
      title: "Verified Environmental And Sustainability Reporting",
      description:
        "Water, input, fuel and soil carbon figures come from measured field activity, satisfying buyers, lenders and reporting frameworks with defensible evidence.",
    },
    {
      icon: "Boxes",
      title: "Fast, Audit-Ready Traceability",
      description:
        "Lot genealogy and chain of custody are current at all times, so buyer audits pass and a recall is scoped precisely instead of broadly.",
    },
    {
      icon: "Clock",
      title: "Reduced Equipment Downtime",
      description:
        "Preventive maintenance driven by actual telematics data and telematics-informed planning keeps machinery available during the narrow windows when it must run.",
    },
    {
      icon: "BarChart3",
      title: "Decisions Grounded In Field Evidence",
      description:
        "Every recommendation carries the data behind it and the agronomic reasoning, so growers can act with confidence and explain the call to buyers and partners.",
    },
  ],

  engagementModels: [
    {
      icon: "Compass",
      title: "Feasibility And Data Audit",
      description:
        "A structured review of current data, equipment and operations that establishes which decisions can be improved, what data already exists, and the realistic value before any platform is built.",
    },
    {
      icon: "Code2",
      title: "Dedicated Agritech Team",
      description:
        "A cross-functional squad of engineers, data scientists and agronomy-domain specialists building and running the platform, aligned to your crop calendar and operating season.",
    },
    {
      icon: "Puzzle",
      title: "Phased Rollout By Block And Season",
      description:
        "Deployment begins with a defined set of fields and one crop, proves the economics against existing practice, then expands block by block and season by season.",
    },
  ],

  faqs: [
    {
      question: "Will these systems actually work in the field where there is no signal?",
      answer:
        "They have to, so we design for that condition rather than treating it as an edge case. Mobile applications capture records offline and reconcile when connectivity returns, edge devices buffer sensor readings locally, and sync conflicts are resolved deterministically so no observation is silently lost. We validate the design during the pilot under the real coverage of your operation, not in a lab with reliable broadband.",
    },
    {
      question: "Can you integrate with the tractors, combines and irrigation equipment we already run?",
      answer:
        "Usually yes. We integrate through ISO 11783 and ISOBUS for implement and controller data, and through manufacturer APIs and telematics gateways for major machinery brands, so you keep your existing capital base. Where a machine exposes data only through a proprietary protocol, we build a targeted adapter. We confirm supported equipment during the feasibility audit so there are no surprises mid-season.",
    },
    {
      question: "How do we know this reduces input costs rather than just producing more data?",
      answer:
        "Every pilot is run against a control block using your existing practice, and we measure the variables that matter: input cost per hectare, yield, water applied and gross margin. The platform earns its place on that comparison. If a recommendation does not produce a measurable difference, we remove it rather than defending it, and we will say so plainly in the pilot readout.",
    },
    {
      question: "How do you prove traceability when a buyer or auditor asks?",
      answer:
        "Traceability is captured at the moment events happen: the lot, the field, the input batch, the operator and the handler, all linked as the product moves through packing, storage and transport. That means you can answer a buyer question in minutes and scope a recall precisely instead of withdrawing everything. Reports are structured to map to the frameworks your certification and buyers already work in, including GS1 identifiers and HACCP-style records.",
    },
    {
      question: "Are drones and satellite data legally usable on our operation?",
      answer:
        "Compliance is part of the delivery, not an afterthought. We work within the applicable aviation rules for drone operations, including operator certification and flight approvals where they are required, and we review airspace and landowner permission considerations for autonomous flight. All imagery capture, processing and record-keeping is documented so the data remains defensible if it is ever challenged.",
    },
    {
      question: "How would an engagement start, and can our agronomists be involved?",
      answer:
        "It starts with a feasibility audit that reviews your data, equipment and current decision-making, then moves to a pilot on a defined block and crop with the rest of the operation as control. Your agronomists should be embedded throughout, because their validation is what separates a model output from an agronomic recommendation. Everything we build is documented well enough that your team owns and extends it after handover.",
    },
  ],

  relatedIndustries: ["manufacturing", "retail-ecommerce", "enterprise-organizations"],
};
import React from "react";
import {
  Wifi,
  RadioTower,
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  Settings,
  ListChecks,
  Lightbulb,
  Rocket,
  UploadCloud,
  Cpu,
  ShieldCheck,
  Maximize2,
  Video,
  Users2,
  Database,
  Globe,
  Headset,
  Monitor,
  ZapOff,
  Smile,
  Activity,
  Eye,
  DatabaseZap,
  Signal,
  Clock,
  RefreshCw,
  Lock,
  PieChart,
  BadgeCheck,
  Terminal,
} from "lucide-react";

const detailsById: Record<number, React.ReactNode> = {
  1: (
    <>
      <div className="bg-gradient-to-br from-white to-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="text-gray-700 leading-relaxed">
            <Lightbulb className="inline-block w-5 h-5 text-blue-500 mr-2" />
            Fiber technology provides unlimited bandwidth capabilities and
            offers today’s fastest high-speed data connectivity. Fiber-optics
            uses light to transmit data, a totally different architecture from
            that used by ADSL or VSAT.{" "}
            <span className="font-semibold text-blue-600">
              AlwaysOn Fiber-to-the-Business
            </span>{" "}
            enables a wide variety of uses, from real-time applications,
            web-based applications, telemedicine, VoIP, and video. FTTB is
            extremely flexible to customer preference.
          </p>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-2xl font-semibold text-blue-700 flex items-center gap-2 mb-4">
              <Rocket className="w-6 h-6" /> Advantages of Fiber Technology
            </h3>
            <ul className="list-none pl-0 space-y-4">
              <li className="flex items-start gap-3">
                <DatabaseZap className="w-5 h-5 text-green-500 mt-1" />
                <span className="text-gray-700">
                  <span className="font-semibold">
                    Extremely high performance connectivity:
                  </span>{" "}
                  Virtually unlimited bandwidth speeds (Gbps)
                </span>
              </li>
              <li className="flex items-center gap-2">
                <UploadCloud className="w-4 h-4 text-green-500" />
                Additional capacity available on demand
              </li>
              <li className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-green-500" />
                Low Latency
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-green-500" />
                Extremely reliable and “future proof”
              </li>
              <li className="flex items-center gap-2">
                <Maximize2 className="w-4 h-4 text-green-500" />
                Multiple functions on a single platform – run VoIP, video, and
                data simultaneously without degradation
              </li>
              <li className="flex items-center gap-2">
                <Video className="w-4 h-4 text-green-500" />
                High-quality two-way video conferencing
              </li>
              <li className="flex items-center gap-2">
                <Users2 className="w-4 h-4 text-green-500" />
                Increased enablement of employee productivity
              </li>
              <li className="flex items-center gap-2">
                <Database className="w-4 h-4 text-green-500" />
                Quicker backups to DR site
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-green-500" />
                International access via submarine fiber backhaul to Tier-1 POPs
                in Europe and Asia
              </li>
              <li>
                Stringent service level agreement (SLA) ensuring maximum uptime
              </li>
              <li className="flex items-center gap-2">
                <Headset className="w-4 h-4 text-green-500" />
                24×7 support – Helpdesk manned by experienced engineers
              </li>
              <li className="flex items-center gap-2">
                <Monitor className="w-4 h-4 text-green-500" />
                24×7 network monitoring and fault detection
              </li>
              <li className="flex items-center gap-2">
                <Smile className="w-4 h-4 text-green-500" />
                Commitment to quality – That only AlwaysOn can deliver
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-2xl font-semibold text-blue-700 flex items-center gap-2 mb-4">
              <ZapOff className="w-6 h-6" /> Key Features & Benefits
            </h3>
            <ul className="list-none pl-0 space-y-3">
              <li className="flex items-center gap-2">
                <UploadCloud className="w-4 h-4 text-green-500" />
                Unlimited Access to the internet – No data cap
              </li>
              <li>No hidden Costs – Complete transparency</li>
              <li className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-green-500" />
                Always On – 24×7 availability at a fixed subscription rate
              </li>
              <li>
                Easily Upgradeable – Scale without investing in additional
                equipment
              </li>
              <li>
                Symmetric/Asymmetric – CIR/Dedicated & MIR/Shared per subscriber
              </li>
              <li className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-green-500" />
                Fully Transparent Usage Statistics – Online bandwidth
                utilization tracking
              </li>
              <li>Managed Quality of Service (QoS)</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  ),
  2: (
    <div className="space-y-6 text-gray-700 px-4 sm:px-6 lg:px-8 py-6">
      {/* Section 1: Advanced Wireless Connectivity */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
          <Wifi className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
          Advanced Wireless Connectivity
        </h2>
        <div className="space-y-3 text-sm sm:text-base leading-relaxed">
          <p>
            AlwaysOn offers your business the latest and most up-to-date
            wireless connectivity solution using licensed frequency technology.
            Our practical solutions unlock tomorrow’s possibilities
            today—without overextending your IT budget.
          </p>
          <p>
            High-Speed Wireless Broadband, considered our wireless-DSL solution,
            is ideal for corporate connectivity. It ensures speed, reliability,
            and independence from wired networks. We’ve deployed several base
            stations in key Bangladeshi cities to guarantee strong coverage and
            high availability.
          </p>
          <p>
            With nationwide licensed frequency bands, AlwaysOn supports
            bandwidth from narrow-band (ATMs, Pay-Points) to Ethernet speeds up
            to 6 Mbps.
          </p>
        </div>
      </div>

      {/* Section 2: Advantages */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-green-500" />
          Advantages
        </h3>
        <ul className="space-y-3 text-sm sm:text-base">
          {[
            {
              icon: <Signal className="text-blue-500 w-5 h-5 mt-1" />,
              text: "Fast Speeds & Low Latency – optimal performance for all applications",
            },
            {
              icon: <Settings className="text-blue-500 w-5 h-5 mt-1" />,
              text: "Multiple functions on a single platform – seamless Video & Data usage",
            },
            {
              icon: <ShieldCheck className="text-blue-500 w-5 h-5 mt-1" />,
              text: "Guaranteed QoS – SLAs with defined Mean Time To Repair (MTTR)",
            },
            {
              icon: <Clock className="text-blue-500 w-5 h-5 mt-1" />,
              text: "24×7 support – by experienced network engineers",
            },
            {
              icon: <Clock className="text-blue-500 w-5 h-5 mt-1" />,
              text: "24×7 network monitoring and proactive fault detection",
            },
            {
              icon: <CheckCircle className="text-blue-500 w-5 h-5 mt-1" />,
              text: "Commitment to quality – a hallmark of AlwaysOn service",
            },
            {
              icon: <RefreshCw className="text-blue-500 w-5 h-5 mt-1" />,
              text: "Quick installation – simple and intuitive customer equipment setup",
            },
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              {item.icon}
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Section 3: Key Features & Benefits */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-purple-500" />
          Key Features & Benefits
        </h3>
        <ul className="space-y-3 text-sm sm:text-base">
          {[
            {
              icon: <Wifi className="text-purple-500 w-5 h-5 mt-1" />,
              text: "Unlimited Internet Access – No data caps",
            },
            {
              icon: <CheckCircle className="text-purple-500 w-5 h-5 mt-1" />,
              text: "No hidden costs – Transparent pricing guaranteed",
            },
            {
              icon: <Clock className="text-purple-500 w-5 h-5 mt-1" />,
              text: "Always On – 24/7 access with predictable cost",
            },
            {
              icon: <RefreshCw className="text-purple-500 w-5 h-5 mt-1" />,
              text: "Easily Upgradeable – Add capacity without new hardware",
            },
            {
              icon: <Signal className="text-purple-500 w-5 h-5 mt-1" />,
              text: "Extensive Coverage – Powered by our national base stations",
            },
            {
              icon: <Settings className="text-purple-500 w-5 h-5 mt-1" />,
              text: "Symmetric/Asymmetric bandwidth – CIR & MIR per user",
            },
            {
              icon: <TrendingUp className="text-purple-500 w-5 h-5 mt-1" />,
              text: "Transparent Usage Stats – Online tracking in real-time",
            },
            {
              icon: <ShieldCheck className="text-purple-500 w-5 h-5 mt-1" />,
              text: "Managed QoS – Prioritized, performance-focused connectivity",
            },
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              {item.icon}
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ),
  3: (
    <>
      <div className="w-full lg:w-1/2 space-y-6 px-4 sm:px-6 lg:px-0">
        <p className="text-base sm:text-lg text-gray-700 font-medium">
          <span className="text-blue-600">AlwaysOn</span> delivers
          high-capacity, efficient, and secure wireless backhaul solutions built
          for extreme durability.
        </p>

        <p className="text-gray-600 text-sm sm:text-base">
          Selecting the best wireless backhaul solution requires an optimal
          balance between <span className="font-semibold">speed</span>,{" "}
          <span className="font-semibold">distance</span>,{" "}
          <span className="font-semibold">price</span> and{" "}
          <span className="font-semibold">scalability</span>.
        </p>

        <ul className="list-none pl-0 space-y-3">
          <li className="flex items-center gap-3">
            <RadioTower className="w-6 h-6 text-blue-500" />
            <span className="text-gray-700 text-sm sm:text-base">
              Customizable Radio & Microwave Solutions
            </span>
          </li>
          <li className="flex items-center gap-3">
            <ArrowRight className="w-6 h-6 text-blue-500" />
            <span className="text-gray-700 text-sm sm:text-base">
              License-Exempt Point-to-Point Bridging
            </span>
          </li>
          <li className="flex items-center gap-3">
            <Users className="w-6 h-6 text-blue-500" />
            <span className="text-gray-700 text-sm sm:text-base">
              Point-to-Multipoint IP Backhauling
            </span>
          </li>
          <li className="flex items-center gap-3">
            <ListChecks className="w-6 h-6 text-blue-500" />
            <span className="text-gray-700 text-sm sm:text-base">
              Point-to-Multipoint TDM Backhauling
            </span>
          </li>
        </ul>

        <div className="bg-blue-100 rounded-md p-4">
          <p className="text-blue-700 font-semibold text-sm sm:text-base">
            Guarantee fast time-to-market with reliable high-quality network
            services using our low-cost backhaul solutions.
          </p>
        </div>

        <div className="pt-6 border-t border-gray-200">
          <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
            Key Features
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
              <span className="text-gray-700 font-medium text-sm sm:text-base">
                Simple-to-install, high-capacity, efficient and secure wireless
                bridging
              </span>
            </li>
            <li>
              <p className="text-gray-600 text-sm sm:text-base">
                Range of options available in several configurations for optimal
                cost/performance in every deployment
              </p>
            </li>
            <li className="flex items-center gap-2">
              <Wifi className="w-5 h-5 text-blue-500" />
              <span className="text-gray-600 text-sm sm:text-base">
                Enables data and VoIP services in the 5 GHz bands
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Settings className="w-5 h-5 text-blue-500" />
              <span className="text-gray-600 text-sm sm:text-base">
                Efficient and secure connectivity for a variety of applications
              </span>
            </li>
            <li className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              <span className="text-gray-600 text-sm sm:text-base">
                Based on proven technology, AlwaysOn has long been experienced
                in High Capacity Customized Backhaul solutions.
              </span>
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <h5 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
            Hardware Partners:
          </h5>
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-start">
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm">
              AirSpan
            </span>
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm">
              Alvarion
            </span>
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm">
              SAF Tehnika
            </span>
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm">
              Ubiquiti
            </span>
          </div>
        </div>
      </div>
    </>
  ),
  4: (
    <>
      <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-6xl mx-auto space-y-16">
        {/* Intro */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold flex justify-center items-center flex-wrap gap-2 text-center">
            <Globe className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />
            Expand Your Service – Internet is Always a Plus
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Laptops, tablets, and smartphones are more accessible than ever and
            nearly all equipped with WLAN. Offering public HotSpots in your
            location — free or paid — is a valuable, competitive service.
          </p>
        </div>

        {/* Section Block Template */}
        {[
          {
            title: "AlwaysOn HotSpot Solution",
            icon: <Wifi className="text-green-600" />,
            content: [
              "Powerful WLAN systems for all sizes of environments",
              "Flexible, customizable configurations",
              "Compliant with legal data protection and data retention regulations",
              "Free, timed, or volume-based access via tickets",
              "Supports multiple locations with centralized management",
            ],
          },
          {
            title: "System Principle",
            icon: <Settings className="text-purple-600" />,
            paragraph:
              "Operators manage accounts from a PC (e.g., reception). Tickets are issued, sessions tracked, and statistics generated. Users access the network via a login page. Upon authentication, they receive access per the ticket defined terms.",
          },
          {
            title: "Features Overview",
            icon: <Terminal className="text-yellow-600" />,
            content: [
              "No Software Required",
              "Usage Tracking (time, traffic, quota)",
              "Local & RADIUS Authentication",
              "Walled Garden Support",
              "One-to-One NAT Compatibility",
            ],
            isGrid: true,
          },
          {
            title: "Technical Operation",
            icon: <Lock className="text-red-500" />,
            content: [
              "Static or DHCP IP assignment",
              "Supports redirection to login via NAT & DNS",
              "Customizable servlet login page",
              "Ensures access even with invalid client IPs",
            ],
          },
          {
            title: "Authentication Methods",
            icon: <ShieldCheck className="text-teal-500" />,
            content: [
              "HTTP PAP – Plain text",
              "HTTP CHAP – Encrypted (MD5)",
              "HTTPS – Secure SSL Login",
              "Cookie-based auto-login",
              "MAC address login",
              "Trial Access with restrictions",
            ],
            listStyle: "decimal",
          },
          {
            title: "Authorization & RADIUS",
            icon: <BadgeCheck className="text-indigo-500" />,
            paragraph:
              "Assign user access parameters like speed and quota post-authentication. Monitor activity using internal proxy and optionally forward data to a RADIUS server.",
          },
          {
            title: "Advertisement System",
            icon: <PieChart className="text-pink-500" />,
            paragraph:
              "Transparent ad delivery via embedded proxy. Ads shown on status page and must be viewed before proceeding. Works for all users, with fallback links if pop-ups are blocked.",
          },
          {
            title: "Accounting",
            icon: <PieChart className="text-gray-700" />,
            paragraph:
              "Tracks uptime, traffic, and session data. Forwards accounting to RADIUS if needed.",
          },
        ].map((block, i) => (
          <div key={i} className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold flex items-center gap-2">
              {block.icon}
              {block.title}
            </h3>

            {block.paragraph && (
              <p className="text-gray-700 text-base sm:text-lg">
                {block.paragraph}
              </p>
            )}

            {block.content && (
              <ul
                className={`${
                  block.isGrid
                    ? "grid grid-cols-1 sm:grid-cols-2 gap-4"
                    : "list-inside space-y-1"
                } ${
                  block.listStyle === "decimal" ? "list-decimal" : "list-disc"
                } text-gray-700 text-base`}
              >
                {block.content.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    {!block.isGrid && block.listStyle !== "decimal" && (
                      <span className="mr-2 mt-1">
                        <BadgeCheck className="w-4 h-4 text-blue-500" />
                      </span>
                    )}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>
    </>
  ),
  5: (
    <>
      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
        <span className="font-medium text-blue-600">AlwaysOn</span>’s Mesh
        Network Solutions are scalable, reliable, and affordable. The MeshAP
        nodes adapt easily to architectural or environmental constraints and are
        able to extend Wi-Fi coverage to any geographical location, big or
        small.
      </p>
    </>
  ),
};

export default detailsById;

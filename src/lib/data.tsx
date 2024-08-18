import { Github, Linkedin, Newspaper } from 'lucide-react';

import LogoSwift from '/public/images/logos/icon-swift.svg';
import LogoUIKit from '/public/images/logos/icon-uikit.svg';
import LogoSwiftUI from '/public/images/logos/icon-swiftui.svg';
import LogoTCA from '/public/images/logos/icon-tca.svg';
import LogoXcode from '/public/images/logos/icon-xcode.svg';
import LogoXcodeGen from '/public/images/logos/icon-xcodegen.gif';
import LogoFastlane from '/public/images/logos/icon-fastlane.svg';
import LogoGit from '/public/images/logos/icon-git.svg';
import LogoPaycom from '/public/images/logos/icon-paycom.png';
import LogoPhillips from '/public/images/logos/icon-phillips.jpeg';
import LogoTuist from '/public/images/logos/icon-tuist.png';

import ProjectAStarStudio from '/public/images/project-a-star-studio.gif';
import ProjectBracketBuddy from '/public/images/project-bracket-buddy.png';
import ProjectKTS from '/public/images/project-kts.png';
import ProjectInstagramClone from '/public/images/project-instagram-clone.png';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/aking618',
  MEDIUM: 'https://medium.com/@ayrenking',
  LINKEDIN: 'https://www.linkedin.com/in/ayren-king/',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Experience',
    href: '#experience',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Blog',
    href: '#blog',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/aking618',
  },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/ayren-king/',
  },
  {
    icon: Newspaper,
    url: 'https://medium.com/@ayrenking',
  }
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Swift',
    logo: LogoSwift,
    url: 'https://developer.apple.com/swift/',
  },
  {
    label: 'UIKit',
    logo: LogoUIKit,
    url: 'https://developer.apple.com/documentation/uikit',
  },
  {
    label: 'SwiftUI',
    logo: LogoSwiftUI,
    url: 'https://developer.apple.com/xcode/swiftui/',
  },
  {
    label: 'Xcode',
    logo: LogoXcode,
    url: 'https://developer.apple.com/xcode/',
  },
  {
    label: 'TCA',
    logo: LogoTCA,
    url: 'https://github.com/pointfreeco/swift-composable-architecture',
  },
  {
    label: 'XcodeGen',
    logo: LogoXcodeGen,
    url: 'https://github.com/yonaskolb/XcodeGen',
  },
  {
    label: 'Tuist',
    logo: LogoTuist,
    url: 'https://tuist.io/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
  {
    label: 'Fastlane',
    logo: LogoFastlane,
    url: 'https://fastlane.tools/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoPhillips,
    logoAlt: 'Phillips logo',
    company: 'Phillips',
    position: 'iOS Developer',
    startDate: new Date(2024, 5),
    currentlyWorkHere: true,
    summary: [
      'Developed and maintained iOS application for Phillips.',
      'Implemented a UITesting framework to ensure the quality and maintainability of the application.',
      'Collaborated closely with the design team to create a seamless user experience.',
      'Met with stakeholders to gather requirements and provide updates on project progress.',
    ],
    technologies: ['Swift', 'UIKit', 'SwiftUI', 'Xcode', 'TCA', 'Tuist'],
  },
  {
    logo: LogoPaycom,
    logoAlt: 'Paycom logo',
    company: 'Paycom',
    position: 'Software Developer IV',
    startDate: new Date(2022, 11),
    endDate: new Date(2024, 5),
    summary: [
      'Proposed and added GitLab CI/CD pipelines for automated testing, build archiving, and App Store deployment.',
      'Mentored a team in developing an iOS event management app during the company’s 2023 summer internship.',
      'Reduced UI Tests runtime by 70% through parallelism and utilization of the iOS Accessibility platform.',
      'Developed scripts to decrease time needed for our Quality Assurance teams in testing Localizations within the app.',
      'Improved localization efficiency by building and integrating a Swift package to automate the detection of unused and missing translations.',
    ],
    technologies: ['Swift', 'UIKit', 'SwiftUI', 'WebKit', 'Realm', 'Fastlane', 'Xcode', 'XcodeGen', 'GitLab'],
  },
  {
    logo: LogoPaycom,
    logoAlt: 'Paycom logo',
    company: 'Paycom',
    position: 'Software Development Intern',
    startDate: new Date(2021, 4),
    endDate: new Date(2022, 11),
    summary: [
      'Designed and built an iOS fitness competition app, utilizing HealthKit API for precise tracking of user engagement.',
      'Streamlined employee time tracking for over 125,000+ employees by integrating punch modifications to an Android kiosk application.',
      'Created an internal React and PHP web app for showcasing new features to clients.',
    ],
    technologies: ['Swift', 'UIKit', 'HealthKit', 'ActivityKit', 'Kotlin', 'Android', 'React', 'PHP'],
  },
];

export const PROJECTS: ProjectDetails[] = [
    {
      name: 'Kicking the Sheets | iOS App',
      description: 'A task management app that enhances productivity with streak-based incentives.',
      url: 'https://apple.co/3t9hZev',
      previewImage: ProjectKTS,
      technologies: ['Swift', 'SwiftUI', 'Sqlite', 'WidgetKit'],
    },
    {
      name: 'Bracket Buddy | iOS App',
      description: 'An app for Super Smash Bros. Ultimate players to track their sets and take notes on their opponents.',
      url: 'https://github.com/aking618/BracketBuddy',
      previewImage: ProjectBracketBuddy,
      technologies: ['Swift', 'SwiftUI', 'SwiftData', 'OauthSwift | Oauth2', 'Apollo | GraphQL'],
    },
    {
      name: 'Instagram UI Clone | iOS Demo',
      description: 'A clone of the Instagram login and landing page built and presented at a SwiftUI workshop for Paycom\'s college outreach program.',
      url: 'https://github.com/aking618/Instagram-UI-Clone',
      previewImage: ProjectInstagramClone,
      technologies: ['Swift', 'SwiftUI'],
    },
    {
      name: 'A-Star Studio | MacOS App',
      description: 'A MacOS application to visualize pathfinding with A* algorithm.',
      url: 'https://github.com/aking618/A-Star-Studio',
      previewImage: ProjectAStarStudio,
      technologies: ['Swift', 'SwiftUI'],
    }
];

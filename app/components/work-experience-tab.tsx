import {
  Timeline,
  TimelineItem,
  TimelineListItem,
} from "@/components/ui/timeline";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const WorkExperienceTab = () => (
  <motion.div variants={containerVariants} initial="hidden" animate="visible">
    <Timeline>
      <TimelineItem
        imageSrc="crewfare-logo.png"
        imageAlt="Company logo"
        start="Feb 2025"
        end="Present"
        title="Crewfare"
        subtitle="Software Engineer"
      >
        <TimelineListItem>
          Top contributor to the customer-facing booking site, owning checkout,
          hotel room cards, SEO, and analytics.
        </TimelineListItem>
        <TimelineListItem>
          Implemented pixel-perfect Figma designs, translating more than 20
          components into production React and TypeScript.
        </TimelineListItem>
        <TimelineListItem>
          Migrated a legacy booking flow to a modern Next.js stack, improving
          the conversion rate.
        </TimelineListItem>
        <TimelineListItem>
          Upgraded the app to Next.js 16 with Turbopack and the React Compiler,
          and moved forms to TanStack Form.
        </TimelineListItem>
        <TimelineListItem>
          Improved SEO with server-rendered hotel lists, structured data,
          canonical URLs, breadcrumbs, and sitemap updates.
        </TimelineListItem>
        <TimelineListItem>
          Redesigned the team&apos;s AI agent skills around CI QA workflows.
        </TimelineListItem>
      </TimelineItem>

      <TimelineItem
        imageSrc="harmonit-logo.jpeg"
        imageAlt="Company logo"
        parentStart="Apr 2021"
        parentEnd="Oct 2024"
        start="Jun 2022"
        end="Oct 2024"
        title="Harmonit (formerly FRG Informática)"
        subtitle="Software Engineer"
      >
        <TimelineListItem>
          Developed a scalable web ERP for 10,000+ users with React and
          TypeScript.
        </TimelineListItem>
        <TimelineListItem>
          Improved ERP load times by 60% by loading data concurrently with
          Promise.all and Promise.race.
        </TimelineListItem>
        <TimelineListItem>
          Worked on packaging improvements and a Single-SPA microfrontend
          architecture.
        </TimelineListItem>
        <TimelineListItem>
          Improved UI performance by 40% using React, TypeScript, and
          TailwindCSS.
        </TimelineListItem>
        <TimelineListItem>
          Built CI/CD pipelines with automated AWS S3 deployments and CloudFront
          caching, reducing deployment time by 70%.
        </TimelineListItem>
        <TimelineListItem>
          Delivered features in a team of 20+ developers and mentored 6 new
          developers.
        </TimelineListItem>
      </TimelineItem>

      <TimelineItem
        start="Apr 2021"
        end="Jun 2022"
        subtitle="Trainee Developer"
      >
        <TimelineListItem>
          Completed 40+ development courses in 8 months, covering HTML, CSS,
          JavaScript, and REST APIs.
        </TimelineListItem>
        <TimelineListItem>
          Collaborated on debugging and ensuring application functionality.
        </TimelineListItem>
      </TimelineItem>
    </Timeline>
  </motion.div>
);

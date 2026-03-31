export interface HardcodedProduct {
  id: number
  title: string
  imageUrl: string
  category: { id: number; name: string }
  shopId: number
  description?: string
}

// PROFICIENCY SHOP - Training Courses (shopId: 4)
// 18 products total: 3 per category × 6 categories
// "All Products" page shows the first 6
export const HARDCODED_PROFICIENCY_PRODUCTS: HardcodedProduct[] = [
  // Leadership Training (categoryId: 14)
  {
    id: 1,
    title: "Leading Through Change",
    imageUrl: "/images/proficiency/motivation-1-22.png",
    category: { id: 14, name: "Leadership Training" },
    shopId: 4,
    description: "Navigate organizational transformation",
  },
  {
    id: 2,
    title: "Building High-Performing Teams",
    imageUrl: "/images/proficiency/team-meeting-1-20.png",
    category: { id: 14, name: "Leadership Training" },
    shopId: 4,
    description: "Maximize team performance",
  },
  {
    id: 3,
    title: "Strategic Thinking for Managers",
    imageUrl: "/images/proficiency/presentation-1-69.png",
    category: { id: 14, name: "Leadership Training" },
    shopId: 4,
    description: "Align teams with organizational vision",
  },

  // Technical Skills (categoryId: 15)
  {
    id: 4,
    title: "Data Insights with Metabase",
    imageUrl: "/images/proficiency/data-analysis-1-60.png",
    category: { id: 15, name: "Technical Skills" },
    shopId: 4,
    description: "Extract meaningful insights from data",
  },
  {
    id: 5,
    title: "Advanced Data Visualization",
    imageUrl: "/images/proficiency/report-analysis-4-77.png",
    category: { id: 15, name: "Technical Skills" },
    shopId: 4,
    description: "Create compelling visual analytics",
  },
  {
    id: 6,
    title: "Cloud Computing Basics",
    imageUrl: "/images/proficiency/coding-2-31.png",
    category: { id: 15, name: "Technical Skills" },
    shopId: 4,
    description: "Modern infrastructure fundamentals",
  },

  // Soft Skills (categoryId: 16)
  {
    id: 7,
    title: "Executive Communication",
    imageUrl: "/images/proficiency/facetime-3-68.png",
    category: { id: 16, name: "Soft Skills" },
    shopId: 4,
    description: "Influence and persuade effectively",
  },
  {
    id: 8,
    title: "Negotiation Strategies",
    imageUrl: "/images/proficiency/conference-52.png",
    category: { id: 16, name: "Soft Skills" },
    shopId: 4,
    description: "Win-win outcomes every time",
  },
  {
    id: 9,
    title: "Public Speaking Confidence",
    imageUrl: "/images/proficiency/presentation-3-28.png",
    category: { id: 16, name: "Soft Skills" },
    shopId: 4,
    description: "Deliver powerful presentations",
  },

  // Compliance (categoryId: 17)
  {
    id: 10,
    title: "Data Privacy and GDPR",
    imageUrl: "/images/proficiency/authentication-1-5.png",
    category: { id: 17, name: "Compliance" },
    shopId: 4,
    description: "Protect customer data, avoid penalties",
  },
  {
    id: 11,
    title: "Cybersecurity Awareness",
    imageUrl: "/images/proficiency/cybersecurity-1-98.png",
    category: { id: 17, name: "Compliance" },
    shopId: 4,
    description: "Defend against threats and breaches",
  },
  {
    id: 12,
    title: "Regulatory Compliance Essentials",
    imageUrl: "/images/proficiency/quality-check-57.png",
    category: { id: 17, name: "Compliance" },
    shopId: 4,
    description: "Build compliance frameworks",
  },

  // Health & Wellness (categoryId: 18)
  {
    id: 13,
    title: "Stress Management",
    imageUrl: "/images/proficiency/dream-1-2.png",
    category: { id: 18, name: "Health & Wellness" },
    shopId: 4,
    description: "Build resilience at work",
  },
  {
    id: 14,
    title: "Burnout Prevention Strategies",
    imageUrl: "/images/proficiency/coworking-31.png",
    category: { id: 18, name: "Health & Wellness" },
    shopId: 4,
    description: "Sustainable practices for the long run",
  },
  {
    id: 15,
    title: "Meditation and Mindfulness",
    imageUrl: "/images/proficiency/meditation-15.png",
    category: { id: 18, name: "Health & Wellness" },
    shopId: 4,
    description: "Reduce stress, improve focus",
  },

  // Marketing (categoryId: 19)
  {
    id: 16,
    title: "Digital Marketing Essentials",
    imageUrl: "/images/proficiency/marketing-campaign-78.png",
    category: { id: 19, name: "Marketing" },
    shopId: 4,
    description: "Reach and engage your audience",
  },
  {
    id: 17,
    title: "Content Strategy and Creation",
    imageUrl: "/images/proficiency/content-creation-92.png",
    category: { id: 19, name: "Marketing" },
    shopId: 4,
    description: "Drive engagement and conversions",
  },
  {
    id: 18,
    title: "Brand Building Strategies",
    imageUrl: "/images/proficiency/marketing-50.png",
    category: { id: 19, name: "Marketing" },
    shopId: 4,
    description: "Build recognition and loyalty",
  },
]

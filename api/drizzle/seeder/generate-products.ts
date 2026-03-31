import { faker } from "@faker-js/faker"

import { db } from "../../src/utils/db"
import { products } from "../../src/schema/products"
import { shopsData } from "./generate-shops"

const PRODUCTS_COUNT = 75

interface CourseData {
  title: string
  categoryId: number
  description: string
}

const COURSES: CourseData[] = [
  // Leadership Training (categoryId: 14)
  { title: "Leading through change", categoryId: 14, description: "Master the skills to navigate and drive organizational change effectively with confidence and clarity." },
  { title: "Organizational leadership", categoryId: 14, description: "Develop comprehensive leadership capabilities for managing complex organizational structures and dynamics." },
  { title: "Executive presence and influence", categoryId: 14, description: "Build executive presence and learn to influence decisions at the highest levels of your organization." },
  { title: "Building high-performing teams", categoryId: 14, description: "Create and maintain teams that consistently exceed performance targets and organizational goals." },
  { title: "Remote team management", categoryId: 14, description: "Master the unique challenges of leading distributed teams in a hybrid or fully remote environment." },
  { title: "Strategic thinking for managers", categoryId: 14, description: "Develop strategic thinking capabilities to align departmental goals with organizational vision." },
  { title: "Becoming an effective mentor", categoryId: 14, description: "Learn proven mentoring techniques to develop talent and grow future leaders in your organization." },
  { title: "Decision-making under pressure", categoryId: 14, description: "Make sound decisions quickly when stakes are high and information is limited or uncertain." },
  { title: "Change management strategies", categoryId: 14, description: "Implement structured change management approaches that minimize resistance and maximize adoption." },
  { title: "Employee engagement strategies", categoryId: 14, description: "Drive meaningful employee engagement through authentic leadership and organizational connection." },
  { title: "Human resources management", categoryId: 14, description: "Understand HR principles and practices for effective talent management and employee relations." },
  { title: "Recruitment and talent acquisition", categoryId: 14, description: "Build effective recruitment strategies to attract, identify, and hire top talent for your organization." },
  { title: "Performance management systems", categoryId: 14, description: "Design and implement performance management systems that drive accountability and development." },

  // Technical Skills (categoryId: 15)
  { title: "Intro to Metabase embedded analytics", categoryId: 15, description: "Get started with embedding Metabase analytics into your applications for end-user insights." },
  { title: "Data insights with Metabase", categoryId: 15, description: "Learn to extract meaningful insights from your data using Metabase's powerful analytics tools." },
  { title: "Metabase embedded analytics SDK", categoryId: 15, description: "Deep dive into the Metabase SDK for building custom analytics experiences in your applications." },
  { title: "Cloud computing basics", categoryId: 15, description: "Understand cloud computing fundamentals, services, and best practices for modern infrastructure." },
  { title: "Advanced data visualization techniques", categoryId: 15, description: "Create compelling visual representations of complex data to drive business insights and decisions." },
  { title: "Machine learning fundamentals", categoryId: 15, description: "Explore machine learning concepts, algorithms, and practical applications in business contexts." },
  { title: "Business intelligence dashboards", categoryId: 15, description: "Build interactive dashboards that provide real-time visibility into key business metrics and KPIs." },
  { title: "API development and integration", categoryId: 15, description: "Design and build robust APIs and integrate them seamlessly into your technology ecosystem." },
  { title: "Database design and optimization", categoryId: 15, description: "Master database design principles and optimization techniques for improved performance and scalability." },
  { title: "DevOps fundamentals", categoryId: 15, description: "Learn DevOps practices and tools to streamline development, deployment, and operations workflows." },
  { title: "Microservices architecture", categoryId: 15, description: "Design and implement microservices architectures for building scalable and maintainable systems." },
  { title: "Container orchestration with Kubernetes", categoryId: 15, description: "Master Kubernetes for managing containerized applications at scale with resilience and flexibility." },
  { title: "Building scalable systems", categoryId: 15, description: "Design system architectures that handle growth and scale to meet increasing business demands." },
  { title: "Performance optimization strategies", categoryId: 15, description: "Identify bottlenecks and implement optimization strategies to maximize system performance." },

  // Soft Skills (categoryId: 16)
  { title: "Emotional intelligence basics", categoryId: 16, description: "Develop emotional awareness and intelligence to enhance interpersonal relationships and leadership." },
  { title: "Communication fundamentals", categoryId: 16, description: "Master effective communication techniques that build understanding and strengthen professional relationships." },
  { title: "Customer service excellence", categoryId: 16, description: "Deliver exceptional customer service experiences that build loyalty and drive business growth." },
  { title: "Negotiation skills masterclass", categoryId: 16, description: "Learn advanced negotiation techniques to achieve win-win outcomes in business and personal situations." },
  { title: "Public speaking confidence", categoryId: 16, description: "Build confidence and overcome anxiety to deliver powerful presentations and public speaking events." },
  { title: "Time management and productivity", categoryId: 16, description: "Master time management strategies to maximize productivity and achieve better work-life balance." },
  { title: "Conflict resolution in teams", categoryId: 16, description: "Develop conflict resolution skills to address disagreements constructively and strengthen team cohesion." },
  { title: "Cross-functional collaboration", categoryId: 16, description: "Improve collaboration across departments and teams to achieve organizational objectives effectively." },
  { title: "Presentation skills for impact", categoryId: 16, description: "Craft and deliver presentations that engage audiences and drive action on key business initiatives." },
  { title: "Active listening and empathy", categoryId: 16, description: "Practice active listening and empathetic communication to deepen understanding and trust." },
  { title: "Professional networking essentials", categoryId: 16, description: "Build meaningful professional networks and relationships that create career and business opportunities." },
  { title: "Assertiveness training", categoryId: 16, description: "Develop assertive communication skills to express ideas and needs while respecting others." },

  // Compliance (categoryId: 17)
  { title: "Regulatory compliance essentials", categoryId: 17, description: "Understand key regulatory requirements and build compliance frameworks for your industry." },
  { title: "Data privacy and GDPR", categoryId: 17, description: "Master data privacy regulations including GDPR to protect customer data and avoid penalties." },
  { title: "Audit and internal controls", categoryId: 17, description: "Implement effective audit and internal control procedures to ensure organizational integrity." },
  { title: "Risk management in projects", categoryId: 17, description: "Identify, assess, and mitigate risks in projects to improve success rates and stakeholder outcomes." },
  { title: "Cybersecurity awareness training", categoryId: 17, description: "Build organizational cybersecurity awareness to protect against threats and data breaches." },
  { title: "Contract negotiation for business", categoryId: 17, description: "Learn contract negotiation and review processes to protect your organization's interests." },
  { title: "Vendor management and procurement", categoryId: 17, description: "Develop vendor relationships and procurement strategies that optimize costs and quality." },
  { title: "Anti-corruption and ethics", categoryId: 17, description: "Establish ethical standards and anti-corruption policies that build organizational integrity." },
  { title: "Industry regulations overview", categoryId: 17, description: "Gain comprehensive understanding of regulatory requirements specific to your industry." },
  { title: "Quality assurance best practices", categoryId: 17, description: "Implement quality assurance processes that ensure consistent excellence and customer satisfaction." },

  // Health & Wellness (categoryId: 18)
  { title: "Stress management", categoryId: 18, description: "Learn stress management techniques to improve resilience and maintain wellbeing at work." },
  { title: "Workplace ergonomics", categoryId: 18, description: "Optimize your workspace and habits to prevent injury and improve long-term health and comfort." },
  { title: "Mental health awareness", categoryId: 18, description: "Understand mental health factors and develop strategies to support emotional wellbeing." },
  { title: "Work-life balance strategies", categoryId: 18, description: "Create sustainable work-life balance practices that enhance both professional and personal fulfillment." },
  { title: "Fitness and nutrition at work", categoryId: 18, description: "Incorporate fitness and healthy nutrition habits into your work routine for better health outcomes." },
  { title: "Meditation and mindfulness", categoryId: 18, description: "Practice meditation and mindfulness to reduce stress and improve focus and clarity." },
  { title: "Sleep optimization for performance", categoryId: 18, description: "Optimize sleep quality and habits to enhance cognitive function and professional performance." },
  { title: "Burnout prevention strategies", categoryId: 18, description: "Recognize and prevent burnout through sustainable practices and organizational support." },

  // Marketing (categoryId: 19)
  { title: "Brand building strategies", categoryId: 19, description: "Develop comprehensive brand strategies that build recognition and drive customer loyalty." },
  { title: "Digital marketing essentials", categoryId: 19, description: "Master digital marketing channels and strategies to reach and engage your target audience effectively." },
  { title: "Content strategy and creation", categoryId: 19, description: "Develop content strategies and create compelling content that drives engagement and conversions." },
  { title: "Social media marketing for business", categoryId: 19, description: "Leverage social media platforms to build community, engage customers, and drive business results." },
  { title: "Search engine optimization", categoryId: 19, description: "Improve online visibility through search engine optimization techniques and best practices." },
  { title: "Email marketing campaigns", categoryId: 19, description: "Design and execute effective email marketing campaigns that nurture leads and drive revenue." },
  { title: "Analytics and measurement", categoryId: 19, description: "Measure marketing performance and ROI using analytics tools and data-driven insights." },
  { title: "Customer retention strategies", categoryId: 19, description: "Implement strategies to increase customer lifetime value and reduce churn rates." },
  { title: "Loyalty program design", categoryId: 19, description: "Create loyalty programs that reward customers and encourage repeat business and advocacy." },
  { title: "Voice of the customer", categoryId: 19, description: "Gather and act on customer feedback to improve products, services, and customer experience." },
  { title: "Market analysis and competitive intelligence", categoryId: 19, description: "Conduct market analysis and competitive intelligence to inform strategic marketing decisions." },
  { title: "Product strategy and roadmapping", categoryId: 19, description: "Develop product strategies and roadmaps that align with market needs and business objectives." },
  { title: "Pricing strategy fundamentals", categoryId: 19, description: "Master pricing strategy and tactics to optimize revenue while maintaining competitive advantage." },
  { title: "Brand management essentials", categoryId: 19, description: "Manage and strengthen your brand across touchpoints to build long-term brand equity." },
]

type ProductsInput = typeof products.$inferInsert

/**
 * Generates more mock products for the database.
 */
export async function generateProducts() {
  console.log("Generating products...")

  const shops = await db.query.shops.findMany({
    columns: { id: true, name: true },
  })

  const categories = await db.query.productCategories.findMany({
    columns: { id: true, shopId: true },
  })

  const productsBatch: ProductsInput[] = []

  for (let i = 0; i < PRODUCTS_COUNT; i++) {
    const course = COURSES[i % COURSES.length]
    const category = categories.find((cat) => cat.id === course.categoryId)

    if (!category) continue

    const shopId = category.shopId
    const shop = shops.find((shop) => shop.id === shopId)
    if (!shop) continue

    const shopData = shopsData[shopId - 1]
    let imageUrl: string
    if ("images" in shopData && Array.isArray(shopData.images)) {
      const imageName = shopData.images[Math.floor(Math.random() * shopData.images.length)]
      imageUrl = `/images/${shopData.alias}/${imageName}`
    } else {
      const imageId = Math.floor(Math.random() * shopData.imagesCount) + 1
      imageUrl = `/images/${shopData.alias}/${imageId}.png`
    }

    const createdAtDate =
      Math.random() > 0.5
        ? faker.date.past({ years: 4 })
        : faker.date.recent({ days: 90 })

    const createdAt = createdAtDate.toISOString().slice(0, 19).replace("T", " ")

    productsBatch.push({
      id: i,
      title: course.title,
      description: course.description,
      price: faker.commerce.price(),
      categoryId: category.id,
      discount: faker.number.int({ min: 0, max: 30 }).toString(),
      imageUrl,
      shopId,
      createdAt,
    })
  }

  if (productsBatch.length > 0) {
    await db.insert(products).values(productsBatch)
    console.log(`✅ Inserted ${productsBatch.length} products`)
  } else {
    console.log("⚠️ No products to insert (no valid categories or shops)")
  }
}

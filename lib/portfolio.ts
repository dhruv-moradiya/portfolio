import portfolioData from "@/data/portfolio.json";
import type { PortfolioData } from "@/types/portfolio";

export const portfolio = portfolioData as PortfolioData;

export const { personal, seo, socialLinks, contactLinks, stack, experience, projects } = portfolio;

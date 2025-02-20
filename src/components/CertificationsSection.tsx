import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Award, Calendar } from "lucide-react";
import { cn } from "../lib/utils";

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  imageUrl?: string;
}

interface CertificationsSectionProps {
  certifications?: Certification[];
}

const defaultCertifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "9caedd49-5ae9-4531-b76b-6ec64bc556fc",
    imageUrl:
      "https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
  },
  {
    name: "AWS Certified Data Engineer - Associate",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "1b8a9a9e-3db5-488a-8fef-32a5ec86515a",
    imageUrl:
      "https://images.credly.com/images/e5c85d7f-4e50-431e-b5af-fa9d9b0596e7/image.png",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "d1a348c7-6a37-4685-b732-62d011672af3",
    imageUrl:
      "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
  },
];

const CertificationsSection = ({
  certifications = defaultCertifications,
}: CertificationsSectionProps) => {
  return (
    <section className="py-20 px-4 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            AWS Certifications
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications demonstrating expertise in cloud
            technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 dark:bg-black border-gray-200 dark:border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-6">
                    <img
                      src={cert.imageUrl}
                      alt={cert.name}
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white text-center">
                    {cert.name}
                  </h3>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-gray-600 dark:text-gray-300 text-sm">
                      {cert.issuer}
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-gray-600 dark:text-gray-300 text-sm">
                      {cert.date}
                    </span>
                  </div>
                  {cert.credentialId && (
                    <div className="mt-4 text-center">
                      <a
                        href={`https://www.credly.com/badges/${cert.credentialId}/public_url`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline"
                      >
                        Verify on Credly
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;

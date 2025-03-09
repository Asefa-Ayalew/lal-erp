"use client";
import React, { Suspense, useMemo } from "react";
import { motion } from "framer-motion";
import { Box, Button, Container, Text } from "@mantine/core";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import TypingEffect from "./(features)/home/_components/carousel/typing-effect";
import animatedImage from "../../public/jsons/developer.json";
import Lottie from "lottie-react";
import { useLocale } from "./locale-provider";


const Home = () => {
  const typedStrings = useMemo(
    () => [
      "Custom Software Solutions",
      "Scalable and Secure Web Applications",
      "Innovative AI & Machine Learning Integration",
      "Cloud-Based Enterprise Solutions",
      "Seamless Digital Transformation",
      "Optimized Performance with Cutting-Edge Technology",
      "Empowering Businesses with Custom Software Development",
    ],
    []
  );
    const serviceList = [
      "We build scalable and high-performance web applications designed for your business growth.",
      "Intuitive and user-centric experiences powered by React, Angular, and Next.js.",
      "Transforming complex ideas into seamless, interactive digital solutions.",
      "Empowering businesses with modern, responsive, and accessible web technologies.",
      "Collaborate with us to turn your vision into reality using cutting-edge innovations.",
      "Secure, fast, and future-proof applications tailored to your industry needs.",
      "Optimized for performance, SEO, and conversion to maximize business success.",
    ];
    const {t} = useLocale();
  return (
    <section className="flex justify-between dark:text-white text-gray-900 overflow-x-hidden w-full space-x-6">
      <Container className="w-1/2 max-w-none px-0">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="overflow-hidden"
        >
          <Text className="text-4xl font-black mt-20 mb-4">
            {t("Elevate Your Business with Cutting-Edge Technology")}
          </Text>
          <Suspense fallback={<div>Loading...</div>}>
            <TypingEffect
              strings={typedStrings}
              typeSpeed={60}
              backSpeed={40}
              loop={true}
            />
          </Suspense>
          <Box className="space-y-4 text-justify my-6">
            {serviceList.map((service, index) => (
              <Box key={index} className="flex items-start space-x-3">
                <IconCircleCheckFilled size={24} className="text-primary-600" />
                <Text className="text-gray-900 dark:text-white">{t(service)}</Text>
              </Box>
            ))}
          </Box>
        </motion.div>
      <Button size="md" className="bg-primary-600 hover:bg-primary-700">{t("Request Us")}</Button>

      </Container>
      <Container className="md:w-1/2">
        <motion.div
          className="flex justify-center items-center h-screen w-full -mt-24"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <Lottie animationData={animatedImage} loop={true} />
        </motion.div>
      </Container>
    </section>
  );
};

export default Home;

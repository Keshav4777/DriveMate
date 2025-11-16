import React, { useState, useRef } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const COLORS = {
  primaryGreen: '#009179',
  darkerGreen: '#006A58',
  background: '#FFFDF5',
  neutral: '#E7E1C6',
  text: '#3C3B35',
  accent: '#4F4E4B',
};

const DriveMateApp = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const scrollY = useRef(new Animated.Value(0)).current;

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "How does the AI matching system work?",
      answer: "Our AI analyzes your route, schedule, preferences, and past ride history to suggest the most compatible carpool partners. It considers factors like departure times, destination proximity, driving style, and user ratings to ensure optimal matches."
    },
    {
      question: "Is carpooling through your platform safe?",
      answer: "Absolutely! All users undergo identity verification, background checks, and we provide real-time GPS tracking for every ride. Our in-app emergency features and 24/7 support team ensure your safety is always prioritized."
    },
    {
      question: "How do I earn rewards and what can I use them for?",
      answer: "You earn credits for every shared ride based on distance and fuel savings. Credits can be redeemed for discounts on future rides, partner merchant offers, or even cash rewards once you reach certain thresholds."
    },
    {
      question: "What happens if my carpool partner cancels last minute?",
      answer: "Our AI instantly finds alternative matches when cancellations occur. You'll receive immediate notifications with backup options, and we offer priority matching for affected users to minimize disruption to your schedule."
    },
    {
      question: "Can I set preferences for my carpool partners?",
      answer: "Yes! You can set preferences for music, conversation level, pet policies, smoking preferences, and more. Our AI uses these preferences to find the most compatible matches for comfortable rides."
    },
    {
      question: "How much can I save with carpooling?",
      answer: "Users typically save 40-60% on commuting costs by sharing fuel, tolls, and parking fees. Plus, you'll reduce vehicle wear-and-tear and contribute to environmental sustainability while earning reward credits."
    }
  ];

  const featuresData = [
    {
      icon: 'sparkles',
      title: 'Smart AI Matching',
      description: 'AI suggests best carpool partners based on route, schedule, and preferences.',
      color: COLORS.primaryGreen
    },
    {
      icon: 'shield-alt',
      title: 'Safe & Verified',
      description: 'All users are verified, and rides include real-time tracking for security.',
      color: COLORS.primaryGreen
    },
    {
      icon: 'users',
      title: 'Earn Rewards',
      description: 'Save fuel and earn credits every time you share a ride.',
      color: COLORS.primaryGreen
    }
  ];

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.background} barStyle="dark-content" />
      
      {/* Header */}
      <Animated.View style={[styles.header, { opacity: headerOpacity }]}>
        <Text style={styles.logo}>DriveMate</Text>
        <View style={styles.navLinks}>
          <TouchableOpacity>
            <Text style={styles.navLink}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.navLink}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.navLink}>Services</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.navLink}>Contact</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>

      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      >
        {/* Hero Section */}
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Smart AI Carpooling</Text>
          <Text style={styles.heroSubtitle}>
            Reduce traffic, save fuel, and make smarter commutes with our AI-powered
            carpooling platform. Connect with verified users securely and earn rewards.
          </Text>
          <View style={styles.heroButtons}>
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Get Started</Text>
              <Ionicons name="arrow-forward" size={16} color={COLORS.background} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButton}>
              <FontAwesome5 name="google" size={16} color={COLORS.text} />
              <Text style={styles.secondaryButtonText}>Sign in with Google</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.heroCar}>
            <FontAwesome5 name="car" size={80} color={COLORS.primaryGreen} />
          </View>
        </View>

        {/* City Animation Section */}
        <View style={styles.citySection}>
          <View style={styles.cityBuildings}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <View key={item} style={styles.building} />
            ))}
          </View>
          
          <View style={styles.driverCar}>
            <FontAwesome5 name="car" size={40} color={COLORS.primaryGreen} />
          </View>
          
          <View style={styles.userWaiting}>
            <View style={styles.waitingIndicator}>
              <Text style={styles.waitingText}>Waiting...</Text>
            </View>
            <FontAwesome5 name="users" size={32} color={COLORS.primaryGreen} />
          </View>
          
          <View style={styles.connectionLine}>
            <View style={styles.connectionDot} />
          </View>
          
          <View style={styles.cityText}>
            <Text style={styles.cityTitle}>Your Ride is Coming!</Text>
            <Text style={styles.cityDescription}>
              Watch as AI connects you with the perfect carpool match in real-time
            </Text>
          </View>
        </View>

        {/* Features Section */}
        <View style={styles.features}>
          <Text style={styles.sectionTitle}>Why Choose Us?</Text>
          <View style={styles.featuresGrid}>
            {featuresData.map((feature, index) => (
              <TouchableOpacity key={index} style={styles.featureCard}>
                <View style={[styles.featureIcon, { backgroundColor: `${feature.color}20` }]}>
                  <FontAwesome5 name={feature.icon} size={32} color={feature.color} />
                </View>
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureDescription}>{feature.description}</Text>
                <View style={styles.featureBorder} />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* FAQ Section */}
        <View style={styles.faq}>
          <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
          <View style={styles.faqContainer}>
            {faqData.map((item, index) => (
              <View key={index} style={styles.faqItem}>
                <TouchableOpacity 
                  style={styles.faqQuestion}
                  onPress={() => toggleFAQ(index)}
                >
                  <Text style={styles.faqHeader}>{item.question}</Text>
                  <MaterialIcons 
                    name={activeFAQ === index ? "expand-less" : "expand-more"} 
                    size={24} 
                    color={COLORS.primaryGreen} 
                  />
                </TouchableOpacity>
                {activeFAQ === index && (
                  <View style={styles.faqAnswer}>
                    <Text style={styles.faqAnswerText}>{item.answer}</Text>
                  </View>
                )}
              </View>
            ))}
          </View>
        </View>

        {/* CTA Section */}
        <View style={styles.cta}>
          <Text style={styles.ctaTitle}>Ready to Join the Future of Commuting?</Text>
          <Text style={styles.ctaDescription}>
            Start saving money, time, and the environment. Be part of the smart mobility revolution.
          </Text>
          <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>Get Started Today</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © {new Date().getFullYear()} Smart AI Carpooling. All Rights Reserved.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.background,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    zIndex: 1000,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.neutral,
  },
  logo: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.primaryGreen,
  },
  navLinks: {
    flexDirection: 'row',
    gap: 20,
  },
  navLink: {
    fontSize: 16,
    color: COLORS.text,
    fontWeight: '500',
  },
  hero: {
    minHeight: height * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: COLORS.background,
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: '800',
    color: COLORS.primaryGreen,
    textAlign: 'center',
    marginBottom: 20,
  },
  heroSubtitle: {
    fontSize: 18,
    color: COLORS.text,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
    backgroundColor: `${COLORS.neutral}80`,
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.neutral,
  },
  heroButtons: {
    flexDirection: 'row',
    gap: 15,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primaryGreen,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 16,
    gap: 8,
  },
  primaryButtonText: {
    color: COLORS.background,
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: COLORS.neutral,
    gap: 8,
  },
  secondaryButtonText: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: '600',
  },
  heroCar: {
    marginTop: 40,
  },
  citySection: {
    minHeight: height * 0.7,
    backgroundColor: COLORS.background,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityBuildings: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
  },
  building: {
    width: 50,
    height: 100 + Math.random() * 100,
    backgroundColor: COLORS.neutral,
    marginHorizontal: 5,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  driverCar: {
    position: 'absolute',
    left: 20,
    top: '50%',
  },
  userWaiting: {
    position: 'absolute',
    right: 20,
    top: '50%',
    alignItems: 'center',
  },
  waitingIndicator: {
    backgroundColor: COLORS.primaryGreen,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginBottom: 8,
  },
  waitingText: {
    color: COLORS.background,
    fontSize: 12,
    fontWeight: '600',
  },
  connectionLine: {
    position: 'absolute',
    top: '50%',
    left: 80,
    right: 80,
    height: 2,
    backgroundColor: COLORS.primaryGreen,
  },
  connectionDot: {
    position: 'absolute',
    top: -5,
    width: 12,
    height: 12,
    backgroundColor: COLORS.accent,
    borderRadius: 6,
  },
  cityText: {
    alignItems: 'center',
  },
  cityTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.text,
    textAlign: 'center',
    marginBottom: 15,
  },
  cityDescription: {
    fontSize: 16,
    color: COLORS.text,
    textAlign: 'center',
    lineHeight: 22,
    opacity: 0.8,
  },
  features: {
    padding: 20,
    backgroundColor: COLORS.background,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: COLORS.primaryGreen,
    textAlign: 'center',
    marginBottom: 30,
  },
  featuresGrid: {
    gap: 20,
  },
  featureCard: {
    backgroundColor: COLORS.background,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: COLORS.neutral,
    alignItems: 'center',
  },
  featureIcon: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.text,
    textAlign: 'center',
    marginBottom: 10,
  },
  featureDescription: {
    fontSize: 14,
    color: COLORS.text,
    textAlign: 'center',
    lineHeight: 20,
    opacity: 0.8,
  },
  featureBorder: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: COLORS.primaryGreen,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  faq: {
    padding: 20,
    backgroundColor: COLORS.background,
  },
  faqContainer: {
    gap: 15,
  },
  faqItem: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.neutral,
    overflow: 'hidden',
  },
  faqQuestion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: COLORS.background,
  },
  faqHeader: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
    flex: 1,
    marginRight: 10,
  },
  faqAnswer: {
    padding: 20,
    paddingTop: 0,
    backgroundColor: `${COLORS.neutral}40`,
  },
  faqAnswerText: {
    fontSize: 14,
    color: COLORS.text,
    lineHeight: 20,
    opacity: 0.8,
  },
  cta: {
    padding: 40,
    backgroundColor: COLORS.primaryGreen,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.background,
    textAlign: 'center',
    marginBottom: 15,
  },
  ctaDescription: {
    fontSize: 16,
    color: COLORS.background,
    textAlign: 'center',
    lineHeight: 22,
    opacity: 0.9,
    marginBottom: 25,
  },
  ctaButton: {
    backgroundColor: COLORS.background,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 16,
  },
  ctaButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.primaryGreen,
  },
  footer: {
    padding: 30,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: COLORS.neutral,
  },
  footerText: {
    fontSize: 14,
    color: COLORS.text,
    opacity: 0.7,
  },
});

export default DriveMateApp;

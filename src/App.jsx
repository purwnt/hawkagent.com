import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Eye, Shield, Zap, Brain, Target, Globe, Mail, Phone } from 'lucide-react'
import './App.css'
import heroImage from './assets/hero-bg.jpg'
import aiAgentIcon from './assets/ai-agent-icon.png'

function App() {
  const [showContact, setShowContact] = useState(false)

  const useCases = [
    {
      icon: <Eye className="w-8 h-8 text-teal-400" />,
      title: "Autonomous Surveillance",
      description: "AI agents analyzing video feeds in real-time, detecting anomalies and suspicious behavior with unprecedented accuracy."
    },
    {
      icon: <Shield className="w-8 h-8 text-teal-400" />,
      title: "Cybersecurity Operations",
      description: "Transform Security Operations Centers with AI agents for threat detection, incident response, and automated security protocols."
    },
    {
      icon: <Zap className="w-8 h-8 text-teal-400" />,
      title: "Real-Time Threat Detection",
      description: "Instant identification and triage of security threats with AI-powered analysis and automated response systems."
    },
    {
      icon: <Brain className="w-8 h-8 text-teal-400" />,
      title: "Behavioral Analysis",
      description: "Advanced AI agents detecting patterns and anomalies in behavior for enhanced security and monitoring applications."
    },
    {
      icon: <Target className="w-8 h-8 text-teal-400" />,
      title: "Public Safety Monitoring",
      description: "Revolutionizing public safety with intelligent monitoring systems that protect communities and critical infrastructure."
    },
    {
      icon: <Globe className="w-8 h-8 text-teal-400" />,
      title: "Enterprise Security",
      description: "Comprehensive AI-driven security solutions for businesses, from access control to data protection and compliance."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <div 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <img src={aiAgentIcon} alt="HawkAgent" className="w-24 h-24" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-teal-400">Hawk</span>Agent.com
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            The Perfect Domain for the AI Agent Era
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="secondary" className="text-lg px-4 py-2 bg-teal-500/20 text-teal-300 border-teal-400">
              Premium Domain
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2 bg-blue-500/20 text-blue-300 border-blue-400">
              AI & Security
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2 bg-purple-500/20 text-purple-300 border-purple-400">
              Future-Ready
            </Badge>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              onClick={() => setShowContact(true)}
            >
              <Mail className="w-5 h-5 mr-2" />
              Make an Offer
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold transition-all duration-300"
              onClick={() => setShowContact(true)}
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact Owner
            </Button>
          </div>
        </div>
      </div>

      {/* Why This Domain Section */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why <span className="text-teal-400">HawkAgent.com</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              In the rapidly evolving AI landscape, having the right domain name is crucial. 
              HawkAgent.com perfectly captures the essence of intelligent, vigilant AI systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-teal-500 transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <CardTitle className="text-teal-400 text-xl">Memorable & Brandable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Short, powerful, and easy to remember. "Hawk" evokes precision, vigilance, and superior vision - 
                  perfect qualities for AI surveillance and monitoring systems.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-teal-500 transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <CardTitle className="text-teal-400 text-xl">Industry Perfect</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Ideal for AI security, surveillance, monitoring, and agent-based systems. 
                  The domain immediately communicates intelligence, watchfulness, and advanced technology.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-teal-500 transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <CardTitle className="text-teal-400 text-xl">Future-Proof Investment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  As AI agents become ubiquitous in security and surveillance, this domain will only increase in value. 
                  Secure your position in the AI revolution.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Perfect for <span className="text-teal-400">AI Agent</span> Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              HawkAgent.com is ideally suited for cutting-edge AI applications in security, surveillance, and intelligent monitoring systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-teal-500 transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    {useCase.icon}
                    <CardTitle className="text-white text-lg">{useCase.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Market Opportunity Section */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            The <span className="text-teal-400">AI Security</span> Market is Exploding
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <div className="text-3xl font-bold text-teal-400 mb-2">$46.3B</div>
              <div className="text-gray-300">AI Security Market by 2030</div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <div className="text-3xl font-bold text-teal-400 mb-2">23.6%</div>
              <div className="text-gray-300">Annual Growth Rate</div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <div className="text-3xl font-bold text-teal-400 mb-2">85%</div>
              <div className="text-gray-300">of Companies Adopting AI Security</div>
            </div>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            Position your business at the forefront of this massive market opportunity with a domain that 
            perfectly captures the essence of intelligent security and surveillance systems.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      {showContact && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <Card className="bg-slate-800 border-slate-700 max-w-md w-full">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Contact Domain Owner</CardTitle>
              <CardDescription className="text-gray-300">
                Interested in acquiring HawkAgent.com? Get in touch to discuss pricing and terms.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-teal-400" />
                <span>domains@hawkagent.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-teal-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="pt-4">
                <Button 
                  onClick={() => setShowContact(false)}
                  className="w-full bg-teal-600 hover:bg-teal-700"
                >
                  Close
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <img src={aiAgentIcon} alt="HawkAgent" className="w-12 h-12" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">HawkAgent.com</h3>
          <p className="text-gray-400 mb-6">Premium domain for the AI Agent era</p>
          <div className="flex justify-center gap-6 text-sm text-gray-500">
            <span>© 2024 Domain Owner</span>
            <span>•</span>
            <span>Premium Domain for Sale</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App


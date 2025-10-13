"use client";

import { useState, useEffect } from 'react';
import { Sparkles, Phone, Mail, MapPin, Instagram, PlayCircle, ChevronRight, Award, Star, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'photos' | 'reels'>('photos');
  const [scrolled, setScrolled] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('party');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const servicesData = {
    party: {
      id: 'party',
      title: "Party Makeup",
      description: "Look stunning at any party or social gathering with our glamorous party makeup. Perfect for birthdays, cocktail parties, and special celebrations.",
      pricing: [
        { label: "Without eyelashes", price: "₹1,600", description: "Complete party look with makeup, hairstyle, and dupatta draping" },
        { label: "With eyelashes", price: "₹1,700", description: "Enhanced look with premium eyelashes included" },
        { label: "Eyelashes only (add-on)", price: "₹100", description: "Add premium eyelashes to any look" }
      ],
      includes: ["Professional Makeup Application", "Hairstyle of Your Choice", "Dupatta Draping", "Touch-up Kit"],
      note: "Saree draping available for ₹300 extra",
      image: "https://images.pexels.com/photos/1070967/pexels-photo-1070967.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "1.5 - 2 hours",
      featured: false
    },
    haldi: {
      id: 'haldi',
      title: "Haldi / Mehendi Makeup",
      description: "Bright, cheerful makeup perfect for pre-wedding ceremonies. Designed to look fresh and vibrant in natural daylight and traditional attire.",
      pricing: [
        { label: "Complete Package", price: "₹3,000", description: "Everything you need for a perfect Haldi/Mehendi look" }
      ],
      includes: ["HD Makeup Application", "Traditional Hairstyle", "Premium Eyelashes", "Dupatta Draping", "Floral Accessories Placement"],
      image: "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "2 - 2.5 hours",
      featured: false,
      note: ""
    },
    sangeet: {
      id: 'sangeet',
      title: "Sangeet Makeup",
      description: "Glamorous and dance-ready makeup that stays perfect through all the celebrations. Designed for stage lighting and hours of festivities.",
      pricing: [
        { label: "Complete Package", price: "₹4,000", description: "Full sangeet glam with long-lasting formula" }
      ],
      includes: ["HD Makeup Application", "Glamorous Hairstyle", "Premium Eyelashes", "Dupatta Draping", "Setting Spray for Long Wear"],
      image: "https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "2.5 - 3 hours",
      featured: false,
      note: ""
    },
    engagement: {
      id: 'engagement',
      title: "Engagement Makeup",
      description: "Elegant and sophisticated makeup for your special engagement ceremony. A perfect balance of traditional and contemporary style.",
      pricing: [
        { label: "Complete Package", price: "₹6,000", description: "Premium engagement look with all accessories" }
      ],
      includes: ["HD Professional Makeup", "Elegant Hairstyle", "Premium Eyelashes", "Dupatta Draping", "Jewelry Placement Assistance"],
      image: "https://images.pexels.com/photos/3812011/pexels-photo-3812011.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "3 - 3.5 hours",
      featured: false,
      note: ""
    },
    bridal: {
      id: 'bridal',
      title: "Bridal Makeup",
      description: "The ultimate bridal experience with HD makeup that looks flawless in person and photographs beautifully. Every bride deserves to look and feel exceptional.",
      pricing: [
        { label: "HD Bridal Package", price: "₹12,000", description: "Complete bridal transformation with premium products and techniques" }
      ],
      includes: [
        "HD Bridal Makeup (Camera Ready)",
        "Traditional Bridal Hairstyle",
        "Bridal Dupatta Setting",
        "Premium Eyelashes",
        "Contact Lenses",
        "Pre-Bridal Skincare Prep",
        "Touch-up Kit",
        "All Jewelry & Accessory Placement"
      ],
      featured: true,
      image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "4 - 5 hours",
      note: ""
    },
    reception: {
      id: 'reception',
      title: "Reception Makeup",
      description: "Stunning reception makeup that combines elegance with modern style. Perfect for photographs and the grand entrance.",
      pricing: [
        { label: "Complete Package", price: "₹4,000", description: "Full reception glam look" }
      ],
      includes: ["HD Makeup Application", "Modern Hairstyle", "Premium Eyelashes", "Dupatta Draping", "Gown/Dress Styling Assistance"],
      image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "2.5 - 3 hours",
      featured: false,
      note: ""
    }
  };

  const servicesList = [
    { id: 'party', label: 'Party Makeup', featured: false },
    { id: 'haldi', label: 'Haldi / Mehendi', featured: false },
    { id: 'sangeet', label: 'Sangeet', featured: false },
    { id: 'engagement', label: 'Engagement', featured: false },
    { id: 'bridal', label: 'Bridal Makeup', featured: true },
    { id: 'reception', label: 'Reception', featured: false }
  ];

  const combos = [
    {
      title: "Haldi + Sangeet",
      regular: "7,000",
      offer: "6,500",
      tag: "SAVE ₹500"
    },
    {
      title: "Complete Wedding Package",
      subtitle: "Haldi + Mehendi + Sangeet + Bridal",
      regular: "22,000",
      offer: "19,000",
      tag: "SAVE ₹3,000",
      popular: true
    },
    {
      title: "Haldi + Sangeet + Bridal",
      regular: "19,000",
      offer: "17,500",
      tag: "SAVE ₹1,500"
    },
    {
      title: "Bridal + Reception",
      regular: "16,000",
      offer: "15,000",
      tag: "SAVE ₹1,000"
    }
  ];

  const galleryImages = [
    "https://images.pexels.com/photos/1070967/pexels-photo-1070967.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/3812011/pexels-photo-3812011.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/8129903/pexels-photo-8129903.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ];

  const reels = [
    { thumb: "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=400", title: "Bridal Transformation" },
    { thumb: "https://images.pexels.com/photos/1070967/pexels-photo-1070967.jpeg?auto=compress&cs=tinysrgb&w=400", title: "Party Glam" },
    { thumb: "https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=400", title: "Engagement Look" },
    { thumb: "https://images.pexels.com/photos/3812011/pexels-photo-3812011.jpeg?auto=compress&cs=tinysrgb&w=400", title: "Mehendi Magic" }
  ];

  const currentService = servicesData[selectedService as keyof typeof servicesData];

  return (
    <div className="bg-black text-white min-h-screen">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-xl border-b border-amber-500/20' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-serif tracking-wider">
            <span className="text-amber-500">Suhani</span>
            <span className="text-white ml-2">Shivhare</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm tracking-wide">
            <a href="#services" className="hover:text-amber-500 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-amber-500 transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a>
          </div>
          <Button className="bg-amber-500 hover:bg-amber-600 text-black font-medium px-6">
            Book Now
          </Button>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black z-10"></div>
          <img
            src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Hero"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="relative z-20 text-center px-6 max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-500 text-sm backdrop-blur-sm">
            <Award className="w-4 h-4" />
            <span>Certified Professional Makeup Artist</span>
          </div>

          <h1 className="font-serif text-7xl md:text-9xl mb-6 tracking-tight">
            <span className="block text-white">Suhani</span>
            <span className="block text-amber-500 italic">Shivhare</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light tracking-wide">
            Where Beauty Meets Artistry
          </p>

          <p className="text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Specializing in HD professional makeup for bridal, engagement, and special occasions.
            Creating timeless looks that are camera-ready and long-lasting.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-black font-medium px-8 py-6"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black px-8 py-6"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Portfolio
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <ChevronRight className="w-6 h-6 text-amber-500 rotate-90" />
        </div>
      </section>

      <section id="services" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <p className="text-amber-500 text-sm tracking-widest uppercase mb-4">What I Offer</p>
            <h2 className="font-serif text-5xl md:text-7xl mb-6">Services & Pricing</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          </div>

          <Tabs value={selectedService} onValueChange={setSelectedService} className="w-full">
            <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-transparent mb-12 h-auto">
              {servicesList.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="relative px-6 py-3 rounded-full data-[state=active]:bg-amber-500 data-[state=active]:text-black bg-gray-900 text-gray-400 hover:text-white transition-all"
                >
                  {service.label}
                  {service.featured && (
                    <Star className="w-3 h-3 ml-2 inline fill-current" />
                  )}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.values(servicesData).map((service) => (
              <TabsContent key={service.id} value={service.id} className="mt-0">
                <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                  <div className="relative rounded-2xl overflow-hidden group">
                    <div className="aspect-[3/4]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>
                    {service.featured && (
                      <div className="absolute top-6 right-6 bg-amber-500 text-black px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-black" />
                        MOST POPULAR
                      </div>
                    )}
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="font-serif text-4xl mb-4">{service.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{service.description}</p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-amber-500 flex items-center gap-2">
                        <Sparkles className="w-5 h-5" />
                        Pricing Options
                      </h4>
                      {service.pricing.map((price, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-amber-500 transition-all">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold">{price.label}</span>
                            <span className="text-2xl font-bold text-amber-500">{price.price}</span>
                          </div>
                          <p className="text-sm text-gray-400">{price.description}</p>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-amber-500">What's Included</h4>
                      <div className="grid gap-3">
                        {service.includes.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                              <Check className="w-3 h-3 text-amber-500" />
                            </div>
                            <span className="text-gray-300">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {service.duration && (
                      <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                        <div className="flex items-center gap-2 text-amber-500">
                          <Award className="w-5 h-5" />
                          <span className="font-semibold">Duration: {service.duration}</span>
                        </div>
                      </div>
                    )}

                    {service.note && (
                      <p className="text-sm text-gray-500 italic">{service.note}</p>
                    )}

                    <Button size="lg" className="w-full bg-amber-500 hover:bg-amber-600 text-black font-medium">
                      <Phone className="mr-2 w-5 h-5" />
                      Book {service.title}
                    </Button>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-32">
            <div className="text-center mb-16">
              <p className="text-amber-500 text-sm tracking-widest uppercase mb-4">Special Offers</p>
              <h3 className="font-serif text-4xl md:text-6xl mb-6">Combo Packages</h3>
              <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {combos.map((combo, idx) => (
                <div
                  key={idx}
                  className={`relative p-8 rounded-2xl border-2 ${combo.popular ? 'border-amber-500 bg-amber-500/5' : 'border-gray-800 bg-gray-900/50'} backdrop-blur-sm hover:border-amber-500 transition-all duration-300`}
                >
                  {combo.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-black px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Star className="w-3 h-3 fill-black" />
                      BEST VALUE
                    </div>
                  )}

                  <div className="mb-6">
                    <h4 className="text-2xl font-serif mb-1">{combo.title}</h4>
                    {combo.subtitle && <p className="text-sm text-gray-400">{combo.subtitle}</p>}
                  </div>

                  <div className="flex items-end gap-4 mb-4">
                    <div>
                      <div className="text-sm text-gray-500 line-through">₹{combo.regular}</div>
                      <div className="text-4xl font-bold text-amber-500">₹{combo.offer}</div>
                    </div>
                    <div className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                      {combo.tag}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto p-8 rounded-2xl border border-gray-800 bg-gray-900/30 backdrop-blur-sm">
            <h4 className="text-xl font-serif mb-6 text-amber-500">Add-On Services</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Contact Lenses</span>
                <span className="text-amber-500 font-bold">₹400</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Saree Draping</span>
                <span className="text-amber-500 font-bold">₹300</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Morena Local Travel</span>
                <span className="text-amber-500 font-bold">₹500</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Gwalior Travel</span>
                <span className="text-amber-500 font-bold">₹800</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-amber-500 text-sm tracking-widest uppercase mb-4">My Work</p>
            <h2 className="font-serif text-5xl md:text-7xl mb-6">Portfolio</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-8 py-3 rounded-full font-medium transition-all ${activeTab === 'photos' ? 'bg-amber-500 text-black' : 'bg-gray-900 text-gray-400 hover:text-white'}`}
            >
              Photos
            </button>
            <button
              onClick={() => setActiveTab('reels')}
              className={`px-8 py-3 rounded-full font-medium transition-all ${activeTab === 'reels' ? 'bg-amber-500 text-black' : 'bg-gray-900 text-gray-400 hover:text-white'}`}
            >
              Reels
            </button>
          </div>

          {activeTab === 'photos' ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  className="aspect-square overflow-hidden rounded-lg cursor-pointer group relative"
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {reels.map((reel, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="aspect-[9/16] overflow-hidden rounded-xl relative">
                    <img
                      src={reel.thumb}
                      alt={reel.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-amber-500/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                        <PlayCircle className="w-8 h-8 text-black" />
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-center text-sm text-gray-400">{reel.title}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="contact" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-amber-500 text-sm tracking-widest uppercase mb-4">Get In Touch</p>
            <h2 className="font-serif text-5xl md:text-7xl mb-6">Book Your Appointment</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg">Transform your special day with professional makeup artistry</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-amber-500 transition-all">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-serif mb-2">Phone</h3>
              <p className="text-gray-400">Contact for bookings</p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-amber-500 transition-all">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-serif mb-2">Service Areas</h3>
              <p className="text-gray-400">Morena, Gwalior & Outstation</p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-amber-500 transition-all">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-serif mb-2">Email</h3>
              <p className="text-gray-400">Get in touch via email</p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-amber-500 transition-all">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-4">
                <Instagram className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-serif mb-2">Social Media</h3>
              <p className="text-gray-400">Follow for latest work</p>
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-amber-500/30 bg-amber-500/5 backdrop-blur-sm">
            <h3 className="text-2xl font-serif mb-6 text-amber-500">Important Information</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-300">Booking confirmed only after advance payment</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-300">All makeups are HD professional, long-lasting, and camera-friendly</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-300">Customized to client's skin type and preferences</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-300">Travel charges apply for outstation venues</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-medium px-12 py-6 text-lg">
              <Phone className="mr-2 w-5 h-5" />
              Book Your Slot Now
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-900 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-serif">
              <span className="text-amber-500">Suhani</span>
              <span className="text-white ml-2">Shivhare</span>
            </div>

            <p className="text-gray-500 text-sm">
              © 2025 Professional Makeup Artist. All rights reserved.
            </p>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-900 hover:bg-amber-500 flex items-center justify-center transition-colors group">
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-black" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-2xl transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
}

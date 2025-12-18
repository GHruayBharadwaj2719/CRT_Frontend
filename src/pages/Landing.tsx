import React from 'react';
import { useNavigate } from 'react-router-dom';

// TODO: Icon components (emoji-based) - consider extracting to separate file
interface IconProps {
  children?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

const IconSpan = ({ children, className = '', ariaLabel }: IconProps) => (
  <span role={ariaLabel ? 'img' : undefined} aria-label={ariaLabel} className={className}>
    {children}
  </span>
);

// TODO: Icon component definitions - each returns a span with emoji
const BookOpen = (props: IconProps) => <IconSpan {...props}>📖</IconSpan>;
const ArrowRight = (props: IconProps) => <IconSpan {...props}>➡️</IconSpan>;
const CheckCircle = (props: IconProps) => <IconSpan {...props}>✅</IconSpan>;

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-900">
      {/* TODO: Navigation bar with logo and auth buttons */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-blue-600" />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            PlacementPrep
          </span>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => navigate('/signin')}
            className="px-6 py-2 text-blue-600 font-semibold hover:text-blue-700 transition-all"
          >
            Sign In
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* TODO: Hero section - main call-to-action */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Master Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Placement Prep</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Complete platform for coding, quantitative aptitude, logical reasoning, and communication skills
        </p>
        <button
          onClick={() => navigate('/signup')}
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-bold text-lg hover:shadow-xl transition-all"
        >
          Start Learning Today
          <ArrowRight className="w-6 h-6" />
        </button>
      </section>

      {/* TODO: Features showcase section - highlight main categories */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose PlacementPrep?</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            'Comprehensive learning materials for all topics',
            'Curated resources from top platforms',
            'Track your progress with custom lessons',
            'Language-specific coding notes',
            'Direct links to practice problems',
            'Beginner-friendly structured roadmap'
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* TODO: Call-to-action section - encourage sign up */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Start Your Placement Journey?</h2>
        <p className="text-xl text-gray-600 mb-8">Join thousands of students preparing for their dream placements</p>
        <button
          onClick={() => navigate('/signup')}
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-bold text-lg hover:shadow-xl transition-all"
        >
          Sign Up Now
        </button>
      </section>

      {/* TODO: Footer with copyright */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">© 2025 PlacementPrep. Created by G Hruday Bharadwaj</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;

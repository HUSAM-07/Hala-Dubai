import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { AlertCircle, ChevronDown } from 'lucide-react';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center">
            Terms and Conditions
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        <div className="space-y-8">
          {/* Update Notice */}
          <Alert className="bg-amber-50 border-amber-200">
            <AlertCircle className="h-5 w-5 text-amber-600" />
            <AlertDescription className="text-sm text-gray-700">
              We have updated our Terms and Conditions. For new users, these terms are effective as of November 14, 2024. 
              For existing users, these changes will take effect on December 14, 2024.
            </AlertDescription>
          </Alert>

          {/* Previous Version Link */}
          <div className="text-center">
            <Button
              variant="link"
              className="text-amber-600 hover:text-amber-700 flex items-center gap-2 mx-auto"
            >
              <span>View Previous Version (Before November 14, 2024)</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>

          {/* Terms Content */}
          <Card className="bg-white shadow-sm">
            <CardContent className="p-6 sm:p-8">
              <div className="prose prose-gray max-w-none">
                {/* Introduction */}
                <section className="mb-8">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    These Terms apply to personal use of the Services only. If you are accessing 
                    or using the Service on behalf of an organization, business, or other legal 
                    entity (each an "Organization"), or if you are accessing or using the Service 
                    under an eligible plus, business, or enterprise Subscription Plan, then your 
                    use of the Services, including ownership of any content created, stored, or 
                    transmitted using the Service, shall be exclusively governed by and subject 
                    to <span className="font-semibold">Hala Dubai's Master Subscription Agreement.</span>
                  </p>
                </section>

                {/* Main Terms */}
                <section className="mb-8">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Please read these Terms of Service ("Terms") carefully before using the 
                    Hala Dubai website and Services operated by Hala Dubai ("Hala Dubai", "us", 
                    "we", or "our"). For purposes of these Terms, "you" and "your" means you 
                    as the user of the Service. "Services" means Hala Dubai's online 
                    platform and services including any related APIs, together with all related 
                    mobile and desktop applications, and Add-ons to which you subscribe. 
                    "Services" exclude Non-Hala Dubai Services.
                  </p>
                </section>

                {/* Acceptance */}
                <section className="mb-8">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Your access to and use of the Service is conditioned upon your acceptance 
                    of and compliance with these Terms. These Terms apply to all visitors, 
                    users and others who wish to access or use the Service. These Terms apply 
                    to personal use of the Services only. You acknowledge that these Terms, 
                    along with Hala Dubai's Privacy Policy, govern your access and use of 
                    the Service.
                  </p>
                </section>

                {/* Agreement */}
                <section>
                  <p className="text-gray-600 leading-relaxed">
                    By accessing or using the Service you agree to be bound by these Terms. 
                    If you disagree with any part of these Terms, then you do not have 
                    permission to access the Service.
                  </p>
                </section>
              </div>
            </CardContent>
          </Card>

          {/* Footer Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 text-sm text-gray-500">
            <Button variant="link" className="text-gray-500 hover:text-gray-700">
              Privacy Policy
            </Button>
            <span className="hidden sm:inline">•</span>
            <Button variant="link" className="text-gray-500 hover:text-gray-700">
              Cookie Policy
            </Button>
            <span className="hidden sm:inline">•</span>
            <Button variant="link" className="text-gray-500 hover:text-gray-700">
              Contact Us
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsPage;
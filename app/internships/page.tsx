'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import type { InternshipType } from '@/types/internships';
import { INTERNSHIPS } from '@/app/data/internships';

export default function InternshipsPage() {
  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Internships</h1>
          <p className="text-lg text-gray-600">Discover internships in Dubai</p>
        </div>
        
        {/* Search Section */}
        <div className="mb-8">
          <div className="flex gap-4 max-w-xl">
            <Input 
              placeholder="Search internships..." 
              className="flex-1"
            />
            <Button>Search</Button>
          </div>
        </div>

        {/* Table Section */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Internship Opportunities</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="font-semibold">Company</TableHead>
                  <TableHead className="font-semibold">Role</TableHead>
                  <TableHead className="font-semibold">Location</TableHead>
                  <TableHead className="font-semibold">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {INTERNSHIPS.map((internship) => (
                  <TableRow 
                    key={internship.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <TableCell className="font-medium">{internship.company}</TableCell>
                    <TableCell>{internship.role}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{internship.location}</Badge>
                    </TableCell>
                    <TableCell className="text-gray-600">{internship.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

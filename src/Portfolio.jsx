
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <main className="p-6 md:p-12 space-y-8 max-w-4xl mx-auto">
      <section className="space-y-2">
        <h1 className="text-4xl font-bold">Sri Teja Molleti</h1>
        <p className="text-gray-600">Entry-level Data Scientist</p>
        <p className="text-sm">Amalapuram, A.P, India | smsriteja@gmail.com | +91 8790133364</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Career Objective</h2>
        <Card>
          <CardContent className="p-4">
            A highly motivated & hardworking professional with analytical and problem-solving skills,
            seeking a Data Scientist position to contribute towards building predictive models and achieving organizational goals.
            Skilled in statistics, probability, Python, and Excel.
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Python", "Machine Learning", "Flask", "Scikit-learn", "Pandas", "Numpy",
            "Seaborn", "SQL", "Excel", "Data Visualization", "Statistics",
            "Probability", "Linear Algebra", "OOPS", "C", "Problem Solving",
            "Analytical Skills", "Communication Skills"
          ].map((skill, i) => (
            <Badge key={i}>{skill}</Badge>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold">Engineering Leadership Trainee – KEC International Ltd, Chennai</h3>
            <p className="text-sm text-gray-600">Nov 2021 – Present</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Prepared daily progress reports and monitored piling activities</li>
              <li>Estimated work activities and created CAD drawings for proposals</li>
              <li>Planned and monitored project activities and handled subcontractor billing</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <Card className="mb-4">
          <CardContent className="p-4">
            <h3 className="font-semibold">Bangalore House Price Prediction</h3>
            <p className="text-sm">Used Linear Regression to build a Flask-based web application to predict house prices.</p>
            <p className="text-sm mt-1">Tasks: Data Cleaning, Feature Engineering, Model Building, Cross-validation, UI Development</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold">Suspension Bridge Analysis using STAAD.PRO</h3>
            <p className="text-sm">3D structural analysis of a cable suspension bridge under various forces (Seismic, Wind, etc.).</p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <Card className="mb-4">
          <CardContent className="p-4">
            <h3 className="font-semibold">B.Tech in Civil Engineering</h3>
            <p className="text-sm">NIT Arunachal Pradesh | 2017 - 2021 | 8.85 CGPA</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold">Higher Secondary School</h3>
            <p className="text-sm">Sasi Jr College | 2015 - 2017 | 97.4%</p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Certificates</h2>
        <ul className="list-disc list-inside">
          <li>Python – HackerRank</li>
          <li>Python – Kaggle</li>
          <li>SQL – Kaggle</li>
          <li>Machine Learning – Kaggle</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Awards</h2>
        <p>Merit Certificate for Efficient Truss Bridge Design – IIT Guwahati Workshop</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Languages</h2>
        <p>Telugu (Native), English (Full Proficiency), Hindi (Full Proficiency)</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Interests</h2>
        <p>Gaming, Listening to Songs, Watching Series</p>
      </section>

      <footer className="pt-8 text-sm text-gray-500">
        &copy; 2025 Sri Teja Molleti. All rights reserved.
      </footer>
    </main>
  );
}

"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  badges?: readonly string[];
  period: string;
  contributions?: readonly string[];
  technologies?: readonly string[];
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  badges,
  period,
  contributions,
  technologies,
}: ResumeCardProps) => {
  return (
    <Card className="overflow-hidden border border-gray-200 dark:border-gray-800">
      <CardContent className="p-6">
        <div className="flex gap-6">
          {/* Logo */}
          <div className="flex-none">
            <div className="size-14 flex items-center justify-center">
              <img
                src={logoUrl}
                alt={altText}
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = "flex";
                }}
              />
              <div className="w-full h-full hidden items-center justify-center text-sm font-medium bg-muted">
                {altText[0]}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-grow min-w-0">
            {/* Header with title, badge, and period */}
            <div className="flex items-start justify-between gap-4 mb-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-semibold text-lg">{title}</h3>
                {badges &&
                  badges.map((badge, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-xs px-2.5 py-0.5 bg-blue-50 text-blue-700 hover:bg-blue-100"
                    >
                      {badge}
                    </Badge>
                  ))}
              </div>
              <div className="text-sm text-muted-foreground whitespace-nowrap">
                {period}
              </div>
            </div>

            {/* Subtitle */}
            {subtitle && (
              <div className="text-sm text-muted-foreground mb-4">
                {subtitle}
              </div>
            )}

            {/* Key Contributions */}
            {contributions && contributions.length > 0 && (
              <div className="mb-4">
                <h4 className="font-semibold text-sm mb-2">
                  Key Contributions
                </h4>
                <ul className="space-y-2">
                  {contributions.map((contribution, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {contribution}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            {technologies && technologies.length > 0 && (
              <div>
                <h4 className="font-semibold text-sm mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-xs px-3 py-1 bg-white"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
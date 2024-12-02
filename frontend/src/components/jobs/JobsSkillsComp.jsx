'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { SkillsCard, SkillCategory, SkillItem } from './styles/JobsStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faTools, faBrain, faUsers, faPlus } from '@fortawesome/free-solid-svg-icons';

export default function JobsSkillsComp() {
  const { theme } = useTheme();

  const skillCategories = [
    {
      icon: faCode,
      name: 'Technical Skills',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Node.js', level: 85 }
      ]
    },
    {
      icon: faTools,
      name: 'Tools & Platforms',
      skills: [
        { name: 'Git', level: 92 },
        { name: 'AWS', level: 80 },
        { name: 'Docker', level: 75 }
      ]
    },
    {
      icon: faBrain,
      name: 'Soft Skills',
      skills: [
        { name: 'Leadership', level: 88 },
        { name: 'Communication', level: 90 },
        { name: 'Problem Solving', level: 92 }
      ]
    }
  ];

  return (
    <SkillsCard theme={theme}>
      <h4>Skills & Expertise</h4>
      {skillCategories.map((category, index) => (
        <SkillCategory key={index} theme={theme}>
          <div className="category-header">
            <FontAwesomeIcon icon={category.icon} />
            <h5>{category.name}</h5>
          </div>
          <div className="skills-grid">
            {category.skills.map((skill, idx) => (
              <SkillItem key={idx} theme={theme} level={skill.level}>
                <span className="skill-name">{skill.name}</span>
                <div className="skill-level">
                  <div className="level-bar" style={{ width: `${skill.level}%` }} />
                  <span className="level-text">{skill.level}%</span>
                </div>
              </SkillItem>
            ))}
            <button className="add-skill">
              <FontAwesomeIcon icon={faPlus} /> Add Skill
            </button>
          </div>
        </SkillCategory>
      ))}
    </SkillsCard>
  );
}

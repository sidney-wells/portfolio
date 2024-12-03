import React from "react";
import { Text } from "../utils/index.js";
import "./taglist.css";

type TextProps = {
  text: string;
  size: "primary" | "small" | "large";
};

interface TagListProps {
  skills: TextProps[];
}

const TagList = ({ skills, ...props }: TagListProps) => {
  return (
    <div className="storybook-taglist">
      {skills.map((skill, i) => (
        <div className="storybook-skill">
          <Text text={skill.text} size={skill.size} key={i} taglist {...props} />
        </div>
      ))}
    </div>
  );
};

export { TagList, type TextProps }

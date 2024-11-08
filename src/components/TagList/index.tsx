import React from "react";
import { Text } from "../utils/index.js";
import "./taglist.css";

type TextProps = {
  text: string;
  size: "primary" | "small" | "large";
};

interface TagListProps {
  skills: TextProps[];
  empty: boolean;
}

export const TagList = ({ empty, skills, ...props }: TagListProps) => {
  if (empty) {
    return (
      <div className={["storybook-card"].join(" ")} {...props}>
        hello my name is Sidney
      </div>
    );
  } else {
    return (
      <div>
        {skills.map((skill, i) => (
          <Text text={skill.text} size={skill.size} key={i} {...props} />
        ))}
      </div>
    );
  }
};

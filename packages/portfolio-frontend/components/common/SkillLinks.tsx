const SkillLinks = ({ skill, skills }: any) => {
  return (
    <a
      key={skill._key}
      href={skills.find((s: any) => s._id === skill._ref).skillUrl}
      target="_blank"
      rel="noreferrer noopener"
    >
      <span className="inline-block px-3 py-1 mr-2 mt-2 text-xs font-medium leading-5 text-stone-100 bg-stone-600 rounded-full hover:bg-stone-100 hover:text-stone-600 transition">
        {skills.find((s: any) => s._id === skill._ref).skillName}
      </span>
    </a>
  );
};

export default SkillLinks;

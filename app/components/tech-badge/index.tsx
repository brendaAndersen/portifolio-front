type TechBadge = {
  name: string;
};

export const TechBadge = ({ name }: TechBadge) => {
  return (
    <span className="bg-violet-250 text-sm py-1 px-3 rounded-lg font-bold">{name}</span>
  );
};

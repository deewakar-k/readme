interface ContentProps {
  header: string;
  title: string;
  description?: string;
}

export default function Content({ header, title, description }: ContentProps) {
  return (
    <div className="flex gap-6 py-4 text-white">
      <div className="text-muted-foreground w-24">{header}</div>
      <div className="flex-1">
        <h3 className="font-medium text-white">{title}</h3>
        {description && (
          <p className="text-muted-foreground mt-1 text-sm">{description}</p>
        )}
      </div>
    </div>
  );
}

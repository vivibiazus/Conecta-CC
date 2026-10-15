export function UserAvatar({ initials }: { initials: string }) {
  return (
    <span aria-hidden className="grid size-11 shrink-0 place-items-center rounded-full bg-[#d6e4f7] text-sm font-semibold text-navy-900">
      {initials}
    </span>
  );
}

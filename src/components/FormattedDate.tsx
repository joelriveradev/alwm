const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

export function FormattedDate({
  date,
  ...props
}: React.ComponentPropsWithoutRef<'time'> & { date: Date }) {
  return (
    <time dateTime={date.toISOString()} {...props} className={props.className}>
      {dateFormatter.format(date)}
    </time>
  )
}

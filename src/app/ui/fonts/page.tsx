const texts = {
  'title-h1': 'Heading 1',
  'title-h2': 'Heading 2',
  'title-h3': 'Heading 3',
  'title-h4': 'Heading 4',
  'title-h5': 'Heading 5',
  'title-h6': 'Heading 6',
  'text-subtitle': 'Subtitle',
  'text-body': 'Body',
  'text-button': 'Button',
  'text-link': 'Links',
  'text-overline': 'Overline',
  'text-caption': 'Caption',
  'text-caption-small': 'Caption small',
}

export default function UIFonts() {
  return (
    <main>
      <h1>Font</h1>

      {Object.keys(texts).map((key) => (
        <p className={key} key={key}>
          {texts[key]}
        </p>
      ))}
    </main>
  )
}

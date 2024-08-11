type buttonsObject = {
  [key: string]: string
}

const buttons: buttonsObject = {
  'btn-primary': 'Primary',
  'btn-secondary': 'Secondary',
  'btn-tertiary': 'Tertiary',
}

export default function UIFonts() {
  return (
    <main>
      <h1>Button</h1>

      {Object.keys(buttons).map((key) => (
        <button className={key} key={key}>
          {buttons[key]}
        </button>
      ))}
    </main>
  )
}

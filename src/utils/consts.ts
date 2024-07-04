export const standardButtons = (): string => {
  return `
    // Standard Buttons
    <Button text="Primary" class="btn btn-primary" />
    <Button text="Secondary" class="btn btn-secondary" />
    <Button text="Success" class="btn btn-success" />
    <Button text="Danger" class="btn btn-danger" />
    <Button text="Warning" class="btn btn-warning" />
    <Button text="Info" class="btn btn-info" />
    <Button text="Link" class="btn btn-link" />
    <Button text="Disabled" class="btn btn-primary" disabled />
  `
};

export const standardButtonsOutlined = (): string => {
  return `
    // Outlined Buttons
    <Button text="Primary" class="btn btn-primary--outlined" />
    <Button text="Secondary" class="btn btn-secondary--outlined" />
    <Button text="Success" class="btn btn-success--outlined" />
    <Button text="Danger" class="btn btn-danger--outlined" />
    <Button text="Warning" class="btn btn-warning--outlined" />
    <Button text="Info" class="btn btn-info--outlined" />
    <Button text="Link" class="btn btn-link--outlined" />
    <Button text="Primary" class="btn btn-primary--outlined" disabled />
  `
}

export const dismissableButtons = (): string => {
  return `
    // Dismissable Button
    <Button title="Primary" class="btn btn-primary">
      <DismissButton />
    </Button>
  `
};
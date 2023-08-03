import { Label, MultiStepContainer, Step, Steps } from './styles'

export interface MultiStepProps {
  step: number
  currentStep?: number
}

export function MultiStep({ step, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {step}
      </Label>

      <Steps css={{ '--steps-sizes': step }}>
        {Array.from({ length: step })
          .map((_, i) => i + 1)
          .map((steps) => {
            return <Step key={steps} active={currentStep >= steps} />
          })}
      </Steps>
    </MultiStepContainer>
  )
}

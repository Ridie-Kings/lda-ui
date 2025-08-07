import IntroductionDocs from '../pages/IntroductionDocs'
import ButtonDocs from '../pages/ButtonDocs'
import BadgeDocs from '../pages/BadgeDocs'
import InputDocs from '../pages/InputDocs'
import TextAreaDocs from '../pages/TextAreaDocs'
import SelectDocs from '../pages/SelectDocs'
import CardDocs from '../pages/CardDocs'
import IconDocs from '../pages/IconDocs'
import FileInputDocs from '../pages/FileInputDocs'
import TabButtonDocs from '../pages/TabButtonDocs'
import AccordionDocs from '../pages/AccordionDocs'
import AlertDocs from '../pages/AlertDocs'
import SliderDocs from '../pages/SliderDocs'
import SwitchDocs from '../pages/SwitchDocs'

interface ComponentDocsProps {
  selectedComponent: string
}

export default function ComponentDocs({ selectedComponent }: ComponentDocsProps) {
  const renderComponent = () => {
    switch (selectedComponent) {
      case 'introduction':
        return <IntroductionDocs />
      case 'button':
        return <ButtonDocs />
      case 'badge':
        return <BadgeDocs />
      case 'input':
        return <InputDocs />
      case 'textarea':
        return <TextAreaDocs />
      case 'select':
        return <SelectDocs />
      case 'card':
        return <CardDocs />
      case 'icon':
        return <IconDocs />
      case 'fileinput':
        return <FileInputDocs />
      case 'tabbutton':
        return <TabButtonDocs />
      case 'slider':
        return <SliderDocs />
      case 'switch':
        return <SwitchDocs />
      case 'accordion':
        return <AccordionDocs />
      case 'alert':
        return <AlertDocs />
      default:
        return <IntroductionDocs />
    }
  }

  return (
    <div className="flex-1 p-8">
      {renderComponent()}
    </div>
  )
}

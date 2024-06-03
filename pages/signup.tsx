import { Form } from "@/src/components-sign/feature-form/Form";
import { Header } from "@/src/components-sign/ui-header/Header";
import { Sns } from "@/src/components-sign/ui-sns/Sns";
import { SignLayout } from "@/src/page-layout/SignLayout/SignLayout";

export default function SignUpPage() {
  return <SignLayout header={<Header />} form={<Form />} sns={<Sns />} />;
}

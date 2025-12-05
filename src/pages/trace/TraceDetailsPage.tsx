import { useNavigate } from 'react-router-dom';
import TraceSection from '@/components/blog/TraceSection';

function TraceDetailsPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return <TraceSection onBack={handleBack} />;
}

export default TraceDetailsPage;

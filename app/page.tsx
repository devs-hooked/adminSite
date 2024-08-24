import ApproveWaitlist from '../app/components/ApproveWaitlist';
import AddToWaitlist from '../app/components/AddtoWaitlist'

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <ApproveWaitlist />
        <AddToWaitlist />
      </div>
    </div>
  );
};

export default HomePage;
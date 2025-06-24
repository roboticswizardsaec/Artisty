import { artists } from '@/lib/constants';

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Manager Dashboard</h1>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Category</th>
              <th className="py-2 px-4 border">City</th>
              <th className="py-2 px-4 border">Fee</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {artists.map((artist) => (
              <tr key={artist.id}>
                <td className="py-2 px-4 border">{artist.name}</td>
                <td className="py-2 px-4 border">{artist.categories.join(', ')}</td>
                <td className="py-2 px-4 border">{artist.location}</td>
                <td className="py-2 px-4 border">₹{artist.fee.toLocaleString()}</td>
                <td className="py-2 px-4 border">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
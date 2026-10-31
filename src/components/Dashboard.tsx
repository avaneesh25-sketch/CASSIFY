import React, { useState } from 'react';

interface DashboardProps {
  onBackToArena: () => void;
  user: { email: string; name: string } | null;
}

interface TeamMember {
  name: string;
  role: string;
  initials: string;
}

export const Dashboard: React.FC<DashboardProps> = ({ onBackToArena, user }) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'team' | 'submissions'>('dashboard');
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    { name: user?.name || 'John Doe', role: 'Team Lead / Strategy', initials: 'JD' },
    { name: 'Aarav K.', role: 'Financial Modeling', initials: 'AK' },
    { name: 'Sana M.', role: 'Market Research', initials: 'SM' },
    { name: 'Priya R.', role: 'Operations & Slides', initials: 'PR' },
  ]);
  const [uploadedFile, setUploadedFile] = useState<{
    name: string;
    size: string;
    date: string;
  } | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [showNewTeamModal, setShowNewTeamModal] = useState(false);
  const [newTeamName, setNewTeamName] = useState('');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      setTimeout(() => {
        setUploadedFile({
          name: file.name,
          size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
          date: new Date().toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          }),
        });
        setIsUploading(false);
      }, 600);
    }
  };

  const handleCreateTeam = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTeamName.trim()) {
      setShowNewTeamModal(false);
      setNewTeamName('');
    }
  };

  return (
    <div className="flex h-[calc(100vh-80px)] overflow-hidden bg-[#f1f3ee] text-[#172019]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#172019] text-white flex flex-col justify-between border-r border-[#263128]">
        <div>
          <div className="p-6 flex items-center justify-between border-b border-white/10">
            <span className="text-xl font-extrabold text-[#c6fa58] tracking-tight flex items-center gap-2">
              <span className="w-7 h-7 rounded bg-[#c6fa58] text-[#172019] grid place-items-center text-base font-bold">
                ↯
              </span>
              Cassify
            </span>
          </div>

          <nav className="p-4 space-y-1.5 text-sm">
            <button
              onClick={onBackToArena}
              className="w-full flex items-center space-x-3 text-[#b3bdae] hover:bg-white/10 hover:text-white px-4 py-2.5 rounded-lg transition text-left"
            >
              <span>←</span>
              <span>Case Arena</span>
            </button>
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg transition text-left font-medium ${
                activeTab === 'dashboard'
                  ? 'bg-[#c6fa58] text-[#172019] font-bold'
                  : 'text-[#b3bdae] hover:bg-white/10 hover:text-white'
              }`}
            >
              <span>📊</span>
              <span>Dashboard</span>
            </button>
            <button
              onClick={() => setActiveTab('team')}
              className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg transition text-left font-medium ${
                activeTab === 'team'
                  ? 'bg-[#c6fa58] text-[#172019] font-bold'
                  : 'text-[#b3bdae] hover:bg-white/10 hover:text-white'
              }`}
            >
              <span>👥</span>
              <span>My Team</span>
            </button>
            <button
              onClick={() => setActiveTab('submissions')}
              className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg transition text-left font-medium ${
                activeTab === 'submissions'
                  ? 'bg-[#c6fa58] text-[#172019] font-bold'
                  : 'text-[#b3bdae] hover:bg-white/10 hover:text-white'
              }`}
            >
              <span>☁️</span>
              <span>Submissions</span>
            </button>
          </nav>
        </div>

        {/* User Card */}
        <div className="p-4 border-t border-white/10 flex items-center space-x-3">
          <div className="w-10 h-10 bg-[#c6fa58] text-[#172019] rounded-full flex items-center justify-center font-bold text-sm">
            {user?.name ? user.name.slice(0, 2).toUpperCase() : 'JD'}
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-bold truncate text-white">
              {user?.name || 'John Doe'}
            </p>
            <p className="text-xs text-[#b3bdae]">Competitor</p>
          </div>
        </div>
      </aside>

      {/* Main Workspace */}
      <main className="flex-1 flex flex-col overflow-y-auto bg-[#f8f9f4]">
        {/* Workspace Header */}
        <header className="h-16 bg-white border-b border-[#dce0d5] flex items-center justify-between px-8 sticky top-0 z-10">
          <h2 className="text-lg sm:text-xl font-bold text-[#172019]">
            Welcome Back, {user?.name ? user.name.split(' ')[0] : 'Competitor'}!
          </h2>
          <button
            onClick={() => setShowNewTeamModal(true)}
            className="bg-[#172019] hover:bg-[#35452a] text-white px-4 py-2 rounded-lg font-semibold transition text-xs sm:text-sm flex items-center gap-1.5 cursor-pointer"
          >
            <span>+</span>
            <span>Create New Team</span>
          </button>
        </header>

        {/* Content Area */}
        <div className="p-8 max-w-6xl w-full mx-auto space-y-8">
          {activeTab === 'dashboard' && (
            <>
              {/* Widgets */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-[#dce0d5] shadow-xs">
                  <span className="text-[#62675f] text-xs font-bold tracking-wider uppercase">
                    Registered Events
                  </span>
                  <p className="text-3xl font-extrabold mt-1 text-[#172019]">2 Active</p>
                  <p className="text-xs text-[#62675f] mt-1">APAC Strategy & Eco Logistics</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-[#dce0d5] shadow-xs">
                  <span className="text-[#62675f] text-xs font-bold tracking-wider uppercase">
                    Upcoming Deadlines
                  </span>
                  <p className="text-3xl font-extrabold mt-1 text-rose-600">3 Days Left</p>
                  <p className="text-xs text-[#62675f] mt-1">Round 1 Executive Deck</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-[#dce0d5] shadow-xs">
                  <span className="text-[#62675f] text-xs font-bold tracking-wider uppercase">
                    Team Status
                  </span>
                  <p className="text-3xl font-extrabold mt-1 text-[#4a642c]">
                    Complete ({teamMembers.length}/4)
                  </p>
                  <p className="text-xs text-[#62675f] mt-1">Ready for submission</p>
                </div>
              </div>

              {/* Registered Events List */}
              <div className="bg-white rounded-2xl border border-[#dce0d5] p-6 sm:p-8 shadow-xs">
                <h3 className="text-lg font-bold text-[#172019] mb-4">Your Enrolled Competitions</h3>
                <div className="divide-y divide-[#dce0d5]">
                  <div className="py-4 flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                    <div>
                      <span className="text-[10px] bg-[#e4edd4] text-[#4a642c] font-bold px-2 py-0.5 rounded-full uppercase">
                        Round 1 Open
                      </span>
                      <h4 className="text-base font-bold text-[#172019] mt-1">
                        Global Market Expansion Strategy
                      </h4>
                      <p className="text-xs text-[#62675f]">Host: SaaS Enterprise League · Prize: $5,000</p>
                    </div>
                    <button
                      onClick={() => setActiveTab('submissions')}
                      className="button-primary text-xs py-2 px-4 rounded-md self-start sm:self-center"
                    >
                      Submit Deck ↗
                    </button>
                  </div>

                  <div className="py-4 flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                    <div>
                      <span className="text-[10px] bg-[#d5dfed] text-[#253b56] font-bold px-2 py-0.5 rounded-full uppercase">
                        Preparation Phase
                      </span>
                      <h4 className="text-base font-bold text-[#172019] mt-1">
                        Sustainable Supply Chain Challenge
                      </h4>
                      <p className="text-xs text-[#62675f]">Host: Global E-Commerce Guild · Prize: $3,500</p>
                    </div>
                    <span className="text-xs font-semibold text-[#62675f] self-start sm:self-center">
                      Opens in 5 days
                    </span>
                  </div>
                </div>
              </div>

              {/* Active Submission Workspace */}
              <div className="bg-white rounded-2xl border border-[#dce0d5] p-6 sm:p-8 shadow-xs">
                <h3 className="text-lg font-bold text-[#172019] mb-6">Active Submission Workspace</h3>
                <div className="bg-[#f8f9f4] border-2 border-dashed border-[#bdc6b5] rounded-xl p-8 sm:p-12 text-center relative hover:bg-[#edf0e8]/50 transition">
                  <div className="text-5xl mb-4 text-[#87907c]">☁️</div>
                  <h4 className="text-base font-bold text-[#172019]">
                    Upload your Pitch Deck (PDF or PPTX)
                  </h4>
                  <p className="text-sm text-[#62675f] mt-1">
                    Drag and drop your file here, or click below to browse
                  </p>

                  <label className="mt-6 inline-block bg-[#172019] hover:bg-[#35452a] text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition cursor-pointer">
                    {isUploading ? 'Uploading...' : 'Choose File'}
                    <input
                      type="file"
                      accept=".pdf,.pptx,.ppt"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>

                  {uploadedFile && (
                    <div className="mt-6 p-4 bg-white border border-[#a4c979] rounded-lg max-w-md mx-auto text-left flex items-center justify-between">
                      <div>
                        <p className="text-sm font-bold text-[#172019] truncate">{uploadedFile.name}</p>
                        <p className="text-xs text-[#62675f]">
                          {uploadedFile.size} · Uploaded on {uploadedFile.date}
                        </p>
                      </div>
                      <span className="bg-[#e4edd4] text-[#4a642c] text-xs font-bold px-2.5 py-1 rounded-full">
                        ✓ Ready
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}

          {activeTab === 'team' && (
            <div className="bg-white rounded-2xl border border-[#dce0d5] p-6 sm:p-8 shadow-xs">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-lg font-bold text-[#172019]">Team Roster: Apex Consultants</h3>
                  <p className="text-xs text-[#62675f]">4 of 4 slots filled</p>
                </div>
                <span className="text-xs bg-[#e4edd4] text-[#4a642c] font-bold px-3 py-1 rounded-full">
                  Status: Verified
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {teamMembers.map((member, idx) => (
                  <div
                    key={idx}
                    className="p-4 border border-[#dce0d5] rounded-xl flex items-center gap-3.5 bg-[#f8f9f4]"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#c6fa58] text-[#172019] font-bold text-xs flex items-center justify-center">
                      {member.initials}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#172019]">{member.name}</p>
                      <p className="text-xs text-[#62675f]">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'submissions' && (
            <div className="bg-white rounded-2xl border border-[#dce0d5] p-6 sm:p-8 shadow-xs">
              <h3 className="text-lg font-bold text-[#172019] mb-4">Submission Records</h3>
              {uploadedFile ? (
                <div className="border border-[#dce0d5] rounded-xl p-5 bg-[#f8f9f4]">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-base text-[#172019]">
                        Global Market Expansion Strategy
                      </h4>
                      <p className="text-xs text-[#62675f]">{uploadedFile.name} ({uploadedFile.size})</p>
                    </div>
                    <span className="bg-[#e4edd4] text-[#4a642c] text-xs font-bold px-2.5 py-1 rounded-full">
                      Submitted
                    </span>
                  </div>
                  <p className="text-xs text-[#62675f]">
                    Submitted timestamp: {uploadedFile.date} · Submission ID: CAS-9820-EX
                  </p>
                </div>
              ) : (
                <div className="text-center py-12 text-[#62675f]">
                  <p className="text-sm font-medium">No files submitted yet.</p>
                  <p className="text-xs mt-1">Upload your pitch deck in the Dashboard tab.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* New Team Modal */}
      {showNewTeamModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 border border-[#dce0d5] shadow-2xl">
            <h3 className="text-lg font-bold text-[#172019] mb-2">Create New Team</h3>
            <p className="text-xs text-[#62675f] mb-4">
              Assemble your squad for the upcoming university case competitions.
            </p>
            <form onSubmit={handleCreateTeam}>
              <label className="block text-xs font-bold text-[#172019] mb-1">Team Name</label>
              <input
                type="text"
                required
                value={newTeamName}
                onChange={(e) => setNewTeamName(e.target.value)}
                placeholder="e.g. Apex Strategists"
                className="w-full border border-[#dce0d5] rounded-lg p-2.5 text-sm mb-4 focus:outline-[#81a536]"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowNewTeamModal(false)}
                  className="px-4 py-2 text-xs font-semibold rounded-lg text-[#62675f] hover:bg-black/5"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="button-primary text-xs py-2 px-4 rounded-lg font-semibold"
                >
                  Create Team
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

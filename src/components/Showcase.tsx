const Showcase = () => {
  return (
    <section className="py-20 px-6 bg-foreground text-background">
      <div className="container mx-auto max-w-6xl">
        {/* Build Courses Fast */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <span className="text-primary text-sm font-medium mb-4 block">BUILD COURSES FAST</span>
            <h3 className="font-serif text-3xl md:text-4xl mb-6">
              Create beautiful courses without any coding knowledge
            </h3>
            <p className="text-background/70 mb-6">
              Our intuitive drag-and-drop builder lets you create professional
              courses in minutes. Add videos, quizzes, assignments, and more
              with just a few clicks.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="text-background/80">Drag-and-drop course builder</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="text-background/80">Pre-built templates</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="text-background/80">Mobile-responsive design</span>
              </li>
            </ul>
          </div>
          <div className="bg-background/10 rounded-2xl p-6 backdrop-blur">
            <div className="bg-sky-50 rounded-xl p-4 border border-border">
              <div className="h-48 bg-background/10 rounded-lg flex items-center justify-center">
                <span className="text-4xl">📚</span>
              </div>
            </div>
          </div>
        </div>

        {/* Focus on Students */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 lg:order-1">
            <div className="bg-background/10 rounded-2xl p-6 backdrop-blur">
              <div className="bg-card text-foreground rounded-xl p-4">
                <h4 className="font-serif text-lg mb-4">Leaderboard</h4>
                <div className="space-y-3">
                  {[
                    { name: "Sarah J.", score: 2450, rank: 1 },
                    { name: "Mike R.", score: 2380, rank: 2 },
                    { name: "Emma T.", score: 2290, rank: 3 }
                  ].map((student, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${i === 0 ? 'bg-primary text-primary-foreground' : 'bg-muted-foreground/30'}`}>
                          {student.rank}
                        </span>
                        <span className="font-medium">{student.name}</span>
                      </div>
                      <span className="text-muted-foreground text-sm">{student.score} pts</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-primary text-sm font-medium mb-4 block">FOCUS ON YOUR STUDENTS</span>
            <h3 className="font-serif text-3xl md:text-4xl mb-6">
              Engage students with gamification and community
            </h3>
            <p className="text-background/70 mb-6">
              Keep students motivated with points, badges, and leaderboards.
              Build a community around your courses with discussion forums
              and live sessions.
            </p>
          </div>
        </div>

        {/* Track & Improve */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary text-sm font-medium mb-4 block">TRACK, LEARN, IMPROVE</span>
            <h3 className="font-serif text-3xl md:text-4xl mb-6">
              Understand your students with powerful analytics
            </h3>
            <p className="text-background/70 mb-6">
              Get detailed insights into how students interact with your
              content. Identify drop-off points, popular lessons, and
              opportunities for improvement.
            </p>
          </div>
          <div className="bg-background/10 rounded-2xl p-6 backdrop-blur">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-sky-50 rounded-xl p-4 text-center border border-border">
                <span className="text-3xl font-bold block">94%</span>
                <span className="text-sm text-background/70">Completion Rate</span>
              </div>
              <div className="bg-background/5 rounded-xl p-4 text-center">
                <span className="text-3xl font-bold block">4.9</span>
                <span className="text-sm text-background/70">Avg. Rating</span>
              </div>
              <div className="bg-background/5 rounded-xl p-4 text-center">
                <span className="text-3xl font-bold block">12k</span>
                <span className="text-sm text-background/70">Students</span>
              </div>
              <div className="bg-background/5 rounded-xl p-4 text-center">
                <span className="text-3xl font-bold block">$84k</span>
                <span className="text-sm text-background/70">Revenue</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;

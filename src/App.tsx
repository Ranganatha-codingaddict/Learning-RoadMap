import React, { useState, useEffect, useMemo } from 'react';
import { 
  Code2, 
  Binary, 
  Cpu, 
  Server, 
  Layout, 
  Database, 
  Cloud, 
  Brain, 
  Sparkles, 
  Workflow, 
  CheckSquare, 
  Briefcase, 
  Search, 
  Download, 
  Upload, 
  CheckCircle2, 
  Circle, 
  BookOpen, 
  Award, 
  HelpCircle, 
  FolderGit2, 
  Flame, 
  Clock, 
  ChevronRight, 
  ChevronDown, 
  Edit3, 
  X, 
  ExternalLink, 
  Star, 
  Check, 
  Save, 
  Compass, 
  RotateCcw,
  BookMarked
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { masterSyllabusData } from './data';
import { SyllabusTopic, CategoryGroup } from './types';

// Map string icon names to Lucide components
const IconMap: { [key: string]: React.ComponentType<any> } = {
  Code2,
  Binary,
  Cpu,
  Server,
  Layout,
  Database,
  Cloud,
  Brain,
  Sparkles,
  Workflow,
  CheckSquare,
  Briefcase
};

export default function App() {
  // Navigation & Category Selection State
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(masterSyllabusData[0].id);
  const [selectedTopicId, setSelectedTopicId] = useState<string>('');

  // Active Tab for the selected Topic: 'roadmap' | 'prerequisites' | 'breakdown' | 'interview' | 'projects' | 'revision'
  const [activeTab, setActiveTab] = useState<'roadmap' | 'prerequisites' | 'breakdown' | 'interview' | 'projects' | 'revision'>('breakdown');

  // Search & Filtering State
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterMode, setFilterMode] = useState<'all' | 'completed' | 'incomplete' | 'starred'>('all');

  // Completed Concepts State (keyed by: topicId-groupName-itemText)
  const [completedItems, setCompletedItems] = useState<{ [key: string]: boolean }>(() => {
    try {
      const saved = localStorage.getItem('swe_ai_completed_items');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Starred Topics State
  const [starredTopics, setStarredTopics] = useState<{ [key: string]: boolean }>(() => {
    try {
      const saved = localStorage.getItem('swe_ai_starred_topics');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // User Custom Notes State (keyed by: topicId-groupName-itemText)
  const [conceptNotes, setConceptNotes] = useState<{ [key: string]: string }>(() => {
    try {
      const saved = localStorage.getItem('swe_ai_concept_notes');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Selected concept for active note writing
  const [editingNoteKey, setEditingNoteKey] = useState<string | null>(null);
  const [noteDraft, setNoteDraft] = useState<string>('');

  // Streak tracker
  const [streak, setStreak] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('swe_ai_streak');
      const lastCheck = localStorage.getItem('swe_ai_last_check_date');
      const todayStr = new Date().toDateString();
      
      if (!saved) return 0;
      const count = parseInt(saved, 10);
      if (lastCheck === todayStr) return count;
      
      // Calculate day difference
      const lastDate = new Date(lastCheck || '');
      const diffTime = Math.abs(new Date().getTime() - lastDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays <= 1) {
        return count;
      }
      return 0; // Streak broken if more than 1 day missed
    } catch {
      return 0;
    }
  });

  // Synchronize localStorage
  useEffect(() => {
    localStorage.setItem('swe_ai_completed_items', JSON.stringify(completedItems));
  }, [completedItems]);

  useEffect(() => {
    localStorage.setItem('swe_ai_starred_topics', JSON.stringify(starredTopics));
  }, [starredTopics]);

  useEffect(() => {
    localStorage.setItem('swe_ai_concept_notes', JSON.stringify(conceptNotes));
  }, [conceptNotes]);

  // Set initial selected topic
  useEffect(() => {
    const category = masterSyllabusData.find(c => c.id === selectedCategoryId);
    if (category && category.topics.length > 0) {
      setSelectedTopicId(category.topics[0].id);
    }
  }, [selectedCategoryId]);

  // Find currently active category & topic objects
  const activeCategory = useMemo(() => {
    return masterSyllabusData.find(c => c.id === selectedCategoryId) || masterSyllabusData[0];
  }, [selectedCategoryId]);

  const activeTopic = useMemo(() => {
    return activeCategory.topics.find(t => t.id === selectedTopicId) || activeCategory.topics[0] || null;
  }, [activeCategory, selectedTopicId]);

  // Total and category progress calculations
  const stats = useMemo(() => {
    let totalConcepts = 0;
    let completedConcepts = 0;
    const categoryStats: { [key: string]: { total: number; completed: number } } = {};

    masterSyllabusData.forEach(cat => {
      let catTotal = 0;
      let catCompleted = 0;
      cat.topics.forEach(topic => {
        topic.breakdown.forEach(group => {
          group.items.forEach(item => {
            const key = `${topic.id}-${group.groupName}-${item}`;
            catTotal++;
            totalConcepts++;
            if (completedItems[key]) {
              catCompleted++;
              completedConcepts++;
            }
          });
        });
      });
      categoryStats[cat.id] = { total: catTotal, completed: catCompleted };
    });

    return {
      totalConcepts,
      completedConcepts,
      percentage: totalConcepts > 0 ? Math.round((completedConcepts / totalConcepts) * 100) : 0,
      categoryStats,
      estimatedHoursRemaining: Math.round((totalConcepts - completedConcepts) * 1.5) // Assume 1.5 hrs per concept
    };
  }, [completedItems]);

  // Handle ticking off items & updating streaks
  const handleToggleItem = (key: string) => {
    const isNowCompleted = !completedItems[key];
    setCompletedItems(prev => ({
      ...prev,
      [key]: isNowCompleted
    }));

    if (isNowCompleted) {
      // Update/maintain study streak
      const todayStr = new Date().toDateString();
      const lastCheck = localStorage.getItem('swe_ai_last_check_date');
      
      let newStreak = streak;
      if (lastCheck !== todayStr) {
        if (!lastCheck) {
          newStreak = 1;
        } else {
          const lastDate = new Date(lastCheck);
          const diffTime = Math.abs(new Date().getTime() - lastDate.getTime());
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          if (diffDays <= 1) {
            newStreak = streak + 1;
          } else {
            newStreak = 1;
          }
        }
        setStreak(newStreak);
        localStorage.setItem('swe_ai_streak', newStreak.toString());
        localStorage.setItem('swe_ai_last_check_date', todayStr);
      }
    }
  };

  const handleToggleStar = (topicId: string) => {
    setStarredTopics(prev => ({
      ...prev,
      [topicId]: !prev[topicId]
    }));
  };

  // Open note drafting
  const handleOpenNote = (key: string) => {
    setEditingNoteKey(key);
    setNoteDraft(conceptNotes[key] || '');
  };

  const handleSaveNote = () => {
    if (editingNoteKey) {
      setConceptNotes(prev => ({
        ...prev,
        [editingNoteKey]: noteDraft
      }));
      setEditingNoteKey(null);
      setNoteDraft('');
    }
  };

  // Search Results Compilation
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const results: {
      categoryName: string;
      categoryId: string;
      topicName: string;
      topicId: string;
      groupName: string;
      itemName: string;
      key: string;
    }[] = [];

    masterSyllabusData.forEach(cat => {
      cat.topics.forEach(topic => {
        topic.breakdown.forEach(group => {
          group.items.forEach(item => {
            if (
              item.toLowerCase().includes(searchQuery.toLowerCase()) ||
              group.groupName.toLowerCase().includes(searchQuery.toLowerCase()) ||
              topic.name.toLowerCase().includes(searchQuery.toLowerCase())
            ) {
              results.push({
                categoryName: cat.name,
                categoryId: cat.id,
                topicName: topic.name,
                topicId: topic.id,
                groupName: group.groupName,
                itemName: item,
                key: `${topic.id}-${group.groupName}-${item}`
              });
            }
          });
        });
      });
    });

    return results;
  }, [searchQuery]);

  // JSON Export / Import functions
  const handleExportData = () => {
    const dataToExport = {
      completedItems,
      starredTopics,
      conceptNotes,
      streak
    };
    const blob = new Blob([JSON.stringify(dataToExport, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `swe-ai-workbook-progress-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleImportData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed.completedItems) setCompletedItems(parsed.completedItems);
        if (parsed.starredTopics) setStarredTopics(parsed.starredTopics);
        if (parsed.conceptNotes) setConceptNotes(parsed.conceptNotes);
        if (parsed.streak) setStreak(parsed.streak);
        alert('Progress imported successfully!');
      } catch (err) {
        alert('Invalid backup file. Please select a genuine workbook backup JSON.');
      }
    };
    reader.readAsText(file);
  };

  const handleResetProgress = () => {
    if (window.confirm('Are you absolutely sure you want to clear your learning progress? This will reset all checks and notes.')) {
      setCompletedItems({});
      setStarredTopics({});
      setConceptNotes({});
      setStreak(0);
      localStorage.clear();
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-[#e2e8f0] font-sans antialiased selection:bg-[#3b82f6] selection:text-white">
      {/* Dynamic Header Dashboard */}
      <header className="border-b border-[#1e293b] bg-[#0f172a] px-6 py-4 sticky top-0 z-30 shadow-lg">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          
          {/* Logo & Headline */}
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-tr from-[#3b82f6] to-[#10b981] rounded-xl text-[#0b0f19]">
              <Cpu className="w-7 h-7" />
            </div>
            <div>
              <h1 id="app-title" className="text-xl md:text-2xl font-semibold tracking-tight text-white flex items-center gap-2">
                SWE + AI Master Workbook
                <span className="text-xs font-mono font-medium bg-[#1e293b] text-[#10b981] border border-[#334155] px-2 py-0.5 rounded-full">
                  v1.2.0
                </span>
              </h1>
              <p className="text-xs text-[#94a3b8]">
                Interactive Roadmap & Syllabus for Software Engineers & AI Engineers
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6 bg-[#131d31] p-3 rounded-xl border border-[#1e293b] shadow-inner">
            
            {/* Total Completion Gauge */}
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <svg className="absolute w-full h-full transform -rotate-90">
                  <circle cx="24" cy="24" r="20" stroke="#1e293b" strokeWidth="4" fill="transparent" />
                  <circle cx="24" cy="24" r="20" stroke="#3b82f6" strokeWidth="4" fill="transparent"
                    strokeDasharray={2 * Math.PI * 20}
                    strokeDashoffset={2 * Math.PI * 20 * (1 - stats.percentage / 100)}
                    className="transition-all duration-500 ease-out"
                  />
                </svg>
                <span className="text-xs font-mono font-semibold text-white">{stats.percentage}%</span>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider font-semibold text-[#64748b]">Total Mastery</p>
                <p className="text-sm font-mono font-bold text-white">
                  {stats.completedConcepts} <span className="text-xs text-[#64748b]">/ {stats.totalConcepts}</span>
                </p>
              </div>
            </div>

            {/* Streak Counter */}
            <div className="h-8 w-px bg-[#1e293b]" />
            <div className="flex items-center gap-2">
              <div className="p-2 bg-[#f59e0b]/10 rounded-lg text-[#f59e0b]">
                <Flame className="w-5 h-5 fill-[#f59e0b]/20" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider font-semibold text-[#64748b]">Study Streak</p>
                <p className="text-sm font-mono font-bold text-[#f59e0b]">{streak} Days</p>
              </div>
            </div>

            {/* Estimated Hours Remaining */}
            <div className="h-8 w-px bg-[#1e293b]" />
            <div className="flex items-center gap-2">
              <div className="p-2 bg-[#10b981]/10 rounded-lg text-[#10b981]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider font-semibold text-[#64748b]">Estimated Time</p>
                <p className="text-sm font-mono font-bold text-[#10b981]">{stats.estimatedHoursRemaining} hrs left</p>
              </div>
            </div>

            {/* Backup Operations */}
            <div className="h-8 w-px bg-[#1e293b]" />
            <div className="flex items-center gap-2">
              <button 
                onClick={handleExportData}
                title="Export Progress JSON"
                className="p-1.5 hover:bg-[#1e293b] rounded text-[#94a3b8] hover:text-white transition-colors"
              >
                <Download className="w-4.5 h-4.5" />
              </button>
              <label 
                title="Import Progress JSON"
                className="p-1.5 hover:bg-[#1e293b] rounded text-[#94a3b8] hover:text-white cursor-pointer transition-colors"
              >
                <Upload className="w-4.5 h-4.5" />
                <input 
                  type="file" 
                  accept=".json" 
                  onChange={handleImportData} 
                  className="hidden" 
                />
              </label>
              <button 
                onClick={handleResetProgress}
                title="Reset All Progress"
                className="p-1.5 hover:bg-[#ef4444]/10 rounded text-[#94a3b8] hover:text-[#ef4444] transition-colors"
              >
                <RotateCcw className="w-4.5 h-4.5" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Global Search and Filter Bar */}
      <section className="bg-[#0f172a]/50 border-b border-[#1e293b] py-3 px-6">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-2.5 w-4.5 h-4.5 text-[#64748b]" />
            <input 
              type="text"
              placeholder="Search concepts, topics, or terms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#131d31] border border-[#1e293b] rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-[#3b82f6] placeholder-[#64748b] transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-[#64748b] hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filter Toggles */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#64748b] uppercase tracking-wider">Concept Filter:</span>
            {(['all', 'completed', 'incomplete', 'starred'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setFilterMode(mode)}
                className={`px-3 py-1 rounded-md text-xs font-medium border transition-all uppercase tracking-tight ${
                  filterMode === mode 
                    ? 'bg-[#3b82f6] text-white border-[#3b82f6] shadow-md'
                    : 'bg-[#131d31] text-[#94a3b8] border-[#1e293b] hover:text-white hover:border-[#334155]'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Workspace Grid */}
      <main className="max-w-[1600px] mx-auto px-6 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT COLUMN: 12 Category list (spanning 3 columns) */}
        <aside className="lg:col-span-3 flex flex-col gap-3">
          <div className="bg-[#0f172a] rounded-xl border border-[#1e293b] p-4">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#64748b] mb-3 px-1 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-[#3b82f6]" />
              Learning Domains
            </h2>
            <nav className="flex flex-col gap-1.5">
              {masterSyllabusData.map((cat) => {
                const CategoryIcon = IconMap[cat.icon] || Code2;
                const active = cat.id === selectedCategoryId;
                const progressVal = stats.categoryStats[cat.id]?.completed || 0;
                const totalVal = stats.categoryStats[cat.id]?.total || 0;
                const percentage = totalVal > 0 ? Math.round((progressVal / totalVal) * 100) : 0;

                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategoryId(cat.id);
                      setSearchQuery(''); // clear search on category swap
                    }}
                    className={`w-full text-left px-3 py-2.5 rounded-lg border transition-all flex items-center justify-between group ${
                      active 
                        ? 'bg-gradient-to-r from-[#1e293b] to-[#131d31] text-[#3b82f6] border-[#3b82f6]/50 shadow-md'
                        : 'bg-[#131d31]/50 text-[#94a3b8] border-[#1e293b] hover:text-white hover:border-[#334155] hover:bg-[#131d31]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-1.5 rounded-md transition-colors ${
                        active ? 'bg-[#3b82f6]/15 text-[#3b82f6]' : 'bg-[#1e293b] text-[#64748b] group-hover:text-white'
                      }`}>
                        <CategoryIcon className="w-4.5 h-4.5" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-sm font-medium block truncate">{cat.name}</span>
                        {/* Custom Micro Progress Indicator */}
                        <div className="flex items-center gap-2 mt-1">
                          <div className="w-20 bg-[#1e293b] h-1 rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${active ? 'bg-[#3b82f6]' : 'bg-[#64748b]'}`}
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                          <span className="text-[10px] font-mono text-[#64748b]">
                            {progressVal}/{totalVal}
                          </span>
                        </div>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 text-[#475569] transition-transform ${
                      active ? 'translate-x-0.5 text-[#3b82f6]' : 'group-hover:translate-x-0.5'
                    }`} />
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* MIDDLE/RIGHT COLUMN: Roadmap, checklists, etc. (spanning 9 columns) */}
        <section className="lg:col-span-9 flex flex-col gap-6">

          {/* Search Overlay/Result panel if searchQuery has length */}
          {searchQuery.trim() ? (
            <div className="bg-[#0f172a] rounded-xl border border-[#1e293b] p-6 shadow-xl">
              <h2 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                <Search className="w-5 h-5 text-[#3b82f6]" />
                Search Results ({searchResults.length})
              </h2>
              {searchResults.length === 0 ? (
                <p className="text-[#94a3b8] text-sm py-4 text-center">No matching concepts found. Try other terms.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[500px] overflow-y-auto pr-2">
                  {searchResults.map((res) => {
                    const isChecked = completedItems[res.key];
                    return (
                      <div 
                        key={res.key}
                        onClick={() => {
                          setSelectedCategoryId(res.categoryId);
                          setSelectedTopicId(res.topicId);
                          setSearchQuery('');
                          setActiveTab('breakdown');
                        }}
                        className="bg-[#131d31] border border-[#1e293b] hover:border-[#3b82f6]/40 p-3.5 rounded-lg cursor-pointer transition-all flex items-start justify-between gap-3 group"
                      >
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className="text-[10px] font-mono font-medium text-[#3b82f6] bg-[#3b82f6]/10 px-1.5 py-0.5 rounded">
                              {res.categoryName}
                            </span>
                            <span className="text-[10px] font-mono font-medium text-[#10b981] bg-[#10b981]/10 px-1.5 py-0.5 rounded">
                              {res.topicName}
                            </span>
                          </div>
                          <p className="text-sm font-medium text-white truncate group-hover:text-[#3b82f6] transition-colors">
                            {res.itemName}
                          </p>
                          <p className="text-[11px] text-[#64748b] mt-0.5 truncate">
                            Section: {res.groupName}
                          </p>
                        </div>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleToggleItem(res.key);
                          }}
                          className={`p-1 rounded-full border transition-colors ${
                            isChecked ? 'bg-[#10b981]/20 border-[#10b981] text-[#10b981]' : 'border-[#475569] hover:border-[#3b82f6] text-[#64748b]'
                          }`}
                        >
                          {isChecked ? <Check className="w-4 h-4" /> : <div className="w-4 h-4" />}
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            // Standard Syllabus Section Display
            <div className="flex flex-col gap-4">
              
              {/* TOPIC SELECTOR FOR SELECTED CATEGORY */}
              <div className="bg-[#0f172a] rounded-xl border border-[#1e293b] p-4 flex flex-wrap gap-2 items-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#64748b] mr-2">Topic / Module:</span>
                {activeCategory.topics.map((topic) => {
                  const isStarred = starredTopics[topic.id];
                  return (
                    <button
                      key={topic.id}
                      onClick={() => {
                        setSelectedTopicId(topic.id);
                        setActiveTab('breakdown'); // Default back to breakdown
                      }}
                      className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all flex items-center gap-2 ${
                        selectedTopicId === topic.id
                          ? 'bg-[#1e293b] text-[#10b981] border-[#10b981]/50 shadow-md'
                          : 'bg-[#131d31] text-[#94a3b8] border-[#1e293b] hover:text-white hover:border-[#334155]'
                      }`}
                    >
                      {topic.name}
                      <Star 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleToggleStar(topic.id);
                        }}
                        className={`w-4 h-4 transition-colors ${
                          isStarred ? 'text-[#f59e0b] fill-[#f59e0b]' : 'text-slate-600 hover:text-white'
                        }`} 
                      />
                    </button>
                  );
                })}
              </div>

              {/* ACTIVE SYLLABUS TOPIC CONTENT */}
              {activeTopic ? (
                <div className="bg-[#0f172a] rounded-xl border border-[#1e293b] overflow-hidden shadow-xl flex flex-col">
                  
                  {/* Title Header with Progress Card */}
                  <div className="bg-[#131d31] border-b border-[#1e293b] px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-xs font-semibold bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/20 px-2 py-0.5 rounded">
                          {activeCategory.name}
                        </span>
                        {starredTopics[activeTopic.id] && (
                          <span className="text-xs font-semibold bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/20 px-2 py-0.5 rounded flex items-center gap-1">
                            <Star className="w-3 h-3 fill-[#f59e0b]" /> Starred Goal
                          </span>
                        )}
                      </div>
                      <h2 id="current-topic-heading" className="text-xl md:text-2xl font-semibold text-white tracking-tight">
                        {activeTopic.name}
                      </h2>
                    </div>

                    {/* Topic Progress Bar */}
                    <div className="sm:text-right bg-[#0f172a] px-4 py-2.5 rounded-lg border border-[#1e293b] min-w-[180px]">
                      <div className="flex justify-between text-xs font-medium text-[#94a3b8] mb-1">
                        <span>Syllabus Progress</span>
                        <span className="font-mono font-bold text-white">
                          {(() => {
                            let total = 0;
                            let completed = 0;
                            activeTopic.breakdown.forEach(g => {
                              g.items.forEach(item => {
                                total++;
                                if (completedItems[`${activeTopic.id}-${g.groupName}-${item}`]) {
                                  completed++;
                                }
                              });
                            });
                            const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
                            return `${percent}% (${completed}/${total})`;
                          })()}
                        </span>
                      </div>
                      <div className="w-full bg-[#1e293b] h-1.5 rounded-full overflow-hidden">
                        <div 
                          className="bg-[#10b981] h-full rounded-full transition-all duration-300"
                          style={{
                            width: `${(() => {
                              let total = 0;
                              let completed = 0;
                              activeTopic.breakdown.forEach(g => {
                                g.items.forEach(item => {
                                  total++;
                                  if (completedItems[`${activeTopic.id}-${g.groupName}-${item}`]) {
                                    completed++;
                                  }
                                });
                              });
                              return total > 0 ? (completed / total) * 100 : 0;
                            })()}%`
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* NAV TABS FOR ROADMAP, PRE-REQ, CONCEPT CHECKS, INTERVIEWS, PROJECTS */}
                  <div className="flex border-b border-[#1e293b] overflow-x-auto bg-[#0f172a] scrollbar-thin">
                    {(
                      [
                        { id: 'breakdown', label: 'Concept Checklist', icon: CheckSquare },
                        { id: 'roadmap', label: 'Learning Roadmap', icon: Compass },
                        { id: 'prerequisites', label: 'Prerequisites', icon: BookMarked },
                        { id: 'interview', label: 'Interview Prep', icon: HelpCircle },
                        { id: 'projects', label: 'Projects & Tasks', icon: FolderGit2 },
                        { id: 'revision', label: 'Revision Checklist', icon: Award }
                      ] as const
                    ).map((tab) => {
                      const TabIcon = tab.icon;
                      const isCurrent = activeTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider border-b-2 whitespace-nowrap transition-all duration-200 ${
                            isCurrent
                              ? 'border-[#3b82f6] text-[#3b82f6] bg-[#1e293b]/20 font-bold'
                              : 'border-transparent text-[#94a3b8] hover:text-white hover:bg-[#131d31]/30'
                          }`}
                        >
                          <TabIcon className="w-4 h-4" />
                          {tab.label}
                        </button>
                      );
                    })}
                  </div>

                  {/* ACTIVE TAB DISPLAY AREA */}
                  <div className="p-6 bg-[#0f172a]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        
                        {/* 1. CONCEPT CHECKLIST TAB */}
                        {activeTab === 'breakdown' && (
                          <div className="flex flex-col gap-6">
                            {activeTopic.breakdown.map((group, groupIdx) => (
                              <div key={groupIdx} className="bg-[#131d31]/50 border border-[#1e293b] rounded-xl p-4 md:p-5">
                                <h3 className="text-sm font-semibold text-[#10b981] mb-4 flex items-center gap-2 border-b border-[#1e293b] pb-2 uppercase tracking-wide">
                                  {group.groupName}
                                </h3>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                  {group.items.map((item, itemIdx) => {
                                    const key = `${activeTopic.id}-${group.groupName}-${item}`;
                                    const isCompleted = completedItems[key];
                                    const hasNotes = !!conceptNotes[key];

                                    // Local filter criteria
                                    if (filterMode === 'completed' && !isCompleted) return null;
                                    if (filterMode === 'incomplete' && isCompleted) return null;
                                    if (filterMode === 'starred' && !starredTopics[activeTopic.id]) return null;

                                    return (
                                      <div 
                                        key={itemIdx}
                                        className={`p-3.5 rounded-lg border transition-all duration-200 flex flex-col gap-2 relative ${
                                          isCompleted 
                                            ? 'bg-[#10b981]/5 border-[#10b981]/25 text-white/90' 
                                            : 'bg-[#131d31] border-[#1e293b] hover:border-[#334155]'
                                        }`}
                                      >
                                        <div className="flex items-start justify-between gap-3">
                                          <div className="flex items-start gap-2.5 min-w-0">
                                            <button
                                              onClick={() => handleToggleItem(key)}
                                              className={`mt-0.5 transition-colors flex-shrink-0 ${
                                                isCompleted ? 'text-[#10b981]' : 'text-slate-500 hover:text-white'
                                              }`}
                                            >
                                              {isCompleted ? (
                                                <CheckCircle2 className="w-5 h-5 fill-[#10b981]/15" />
                                              ) : (
                                                <Circle className="w-5 h-5" />
                                              )}
                                            </button>
                                            <span className={`text-xs md:text-sm leading-relaxed ${isCompleted ? 'line-through text-[#64748b]' : 'text-slate-200'}`}>
                                              {item}
                                            </span>
                                          </div>
                                        </div>

                                        {/* Notes trigger & snippet indicators */}
                                        <div className="flex items-center justify-between border-t border-[#1e293b] pt-2 mt-1">
                                          <button
                                            onClick={() => handleOpenNote(key)}
                                            className="text-[10px] font-mono font-medium text-[#3b82f6] hover:text-[#3b82f6]/80 flex items-center gap-1"
                                          >
                                            <Edit3 className="w-3.5 h-3.5" />
                                            {hasNotes ? 'Edit Notes' : 'Add Note / Code'}
                                          </button>
                                          {hasNotes && (
                                            <span className="text-[9px] font-mono font-medium text-[#10b981] bg-[#10b981]/15 border border-[#10b981]/20 px-1.5 py-0.5 rounded-full">
                                              Saved Note
                                            </span>
                                          )}
                                        </div>

                                        {/* Inline note preview */}
                                        {hasNotes && (
                                          <div className="mt-2 text-[11px] bg-[#0b0f19] p-2 rounded border border-[#1e293b] text-[#94a3b8] font-mono whitespace-pre-wrap max-h-[100px] overflow-y-auto">
                                            {conceptNotes[key]}
                                          </div>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* 2. LEARNING ROADMAP TAB */}
                        {activeTab === 'roadmap' && (
                          <div className="relative border-l-2 border-[#1e293b] ml-4 py-2 flex flex-col gap-6">
                            {activeTopic.roadmap.map((level, levelIdx) => {
                              // Style colors based on level
                              const badgeStyles = {
                                Beginner: 'bg-[#10b981]/15 text-[#10b981] border-[#10b981]/20',
                                Intermediate: 'bg-[#3b82f6]/15 text-[#3b82f6] border-[#3b82f6]/20',
                                Advanced: 'bg-[#f59e0b]/15 text-[#f59e0b] border-[#f59e0b]/20',
                                Expert: 'bg-[#ef4444]/15 text-[#ef4444] border-[#ef4444]/20'
                              }[level.level];

                              return (
                                <div key={levelIdx} className="relative pl-6">
                                  {/* Timeline marker icon */}
                                  <div className="absolute -left-2 top-0.5 w-4.5 h-4.5 bg-[#0f172a] border-2 border-[#1e293b] rounded-full flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full" />
                                  </div>
                                  
                                  <div className="bg-[#131d31] border border-[#1e293b] p-4.5 rounded-xl">
                                    <div className="flex items-center gap-2.5 mb-2.5">
                                      <span className={`text-xs font-semibold px-2 py-0.5 border rounded uppercase tracking-wide ${badgeStyles}`}>
                                        {level.level}
                                      </span>
                                    </div>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-[#94a3b8]">
                                      {level.concepts.map((concept, cIdx) => (
                                        <li key={cIdx} className="flex items-center gap-2">
                                          <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full" />
                                          {concept}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}

                        {/* 3. PREREQUISITES TAB */}
                        {activeTab === 'prerequisites' && (
                          <div className="flex flex-col gap-5">
                            <div className="bg-[#131d31]/55 border border-[#1e293b] p-5 rounded-xl">
                              <h3 className="text-sm font-semibold text-white mb-3">Suggested Learning Prerequisites</h3>
                              <div className="flex flex-wrap gap-2">
                                {activeTopic.prerequisites.topics.map((t, idx) => (
                                  <span key={idx} className="px-3 py-1.5 bg-[#1e293b] border border-[#334155] rounded-lg text-xs font-medium text-slate-300">
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="bg-[#131d31]/55 border border-[#1e293b] p-5 rounded-xl">
                              <h3 className="text-sm font-semibold text-white mb-3">Syllabus Dependency Graph</h3>
                              <div className="font-mono text-xs bg-[#0b0f19] p-4 rounded-lg border border-[#1e293b] text-[#10b981] overflow-x-auto leading-relaxed">
                                {activeTopic.prerequisites.dependencyGraph.map((line, idx) => (
                                  <div key={idx} className="whitespace-pre flex items-center gap-2">
                                    <span className="text-[#3b82f6] font-bold">▶</span>
                                    {line}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* 4. INTERVIEW PREP TAB */}
                        {activeTab === 'interview' && (
                          <div className="flex flex-col gap-4">
                            {activeTopic.interviewQuestions.map((q, idx) => (
                              <div key={idx} className="bg-[#131d31] border border-[#1e293b] rounded-xl overflow-hidden shadow">
                                <div className="px-5 py-3.5 bg-[#1e293b]/40 border-b border-[#1e293b] flex items-start gap-3">
                                  <span className="font-mono text-xs font-bold text-[#3b82f6] uppercase tracking-wider bg-[#3b82f6]/10 px-2 py-0.5 rounded">
                                    Q{idx + 1}
                                  </span>
                                  <h4 className="text-sm font-semibold text-white leading-relaxed">
                                    {q.question}
                                  </h4>
                                </div>
                                <div className="p-5 text-xs md:text-sm leading-relaxed text-[#94a3b8] bg-[#0f172a] whitespace-pre-wrap">
                                  {q.answer}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* 5. PROJECTS TAB */}
                        {activeTab === 'projects' && (
                          <div className="flex flex-col gap-6">
                            
                            {/* Mini Projects */}
                            <div>
                              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#64748b] mb-3 flex items-center gap-1.5">
                                <FolderGit2 className="w-4 h-4 text-[#3b82f6]" />
                                Hands-on Mini Tasks
                              </h3>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {activeTopic.miniProjects.map((p, idx) => (
                                  <div key={idx} className="bg-[#131d31] border border-[#1e293b] p-5 rounded-xl hover:border-[#334155] transition-colors">
                                    <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full" />
                                      {p.title}
                                    </h4>
                                    <p className="text-xs leading-relaxed text-[#94a3b8]">{p.description}</p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Major Capstone */}
                            <div className="bg-gradient-to-br from-[#131d31] to-[#0f172a] border border-[#10b981]/30 p-5 rounded-xl shadow-md">
                              <span className="text-[10px] font-mono font-semibold bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/25 px-2.5 py-1 rounded-full uppercase tracking-wider mb-3.5 inline-block">
                                Capstone Portfolio Major Project
                              </span>
                              <h4 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
                                <Award className="w-5 h-5 text-[#f59e0b]" />
                                {activeTopic.majorProject.title}
                              </h4>
                              <p className="text-xs md:text-sm leading-relaxed text-[#94a3b8] bg-[#0b0f19]/35 p-3.5 rounded-lg border border-[#1e293b] font-normal">
                                {activeTopic.majorProject.description}
                              </p>
                            </div>

                          </div>
                        )}

                        {/* 6. REVISION CHECKLIST TAB */}
                        {activeTab === 'revision' && (
                          <div className="bg-[#131d31]/40 border border-[#1e293b] p-5 rounded-xl">
                            <h3 className="text-sm font-semibold text-[#10b981] mb-4 flex items-center gap-2 border-b border-[#1e293b] pb-2 uppercase tracking-wide">
                              Module Certification Checkpoints
                            </h3>
                            <ul className="flex flex-col gap-3">
                              {activeTopic.revisionChecklist.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-[#94a3b8] leading-relaxed">
                                  <div className="p-0.5 bg-[#10b981]/10 text-[#10b981] rounded mt-0.5">
                                    <Check className="w-4.5 h-4.5" />
                                  </div>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                      </motion.div>
                    </AnimatePresence>
                  </div>

                </div>
              ) : (
                <div className="bg-[#0f172a] rounded-xl border border-[#1e293b] p-12 text-center text-[#94a3b8]">
                  Select a category or topic to begin mastering.
                </div>
              )}

            </div>
          )}

        </section>
      </main>

      {/* NOTE EDITING POPUP MODAL */}
      <AnimatePresence>
        {editingNoteKey && (
          <div className="fixed inset-0 bg-black/75 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#0f172a] border border-[#1e293b] rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl"
            >
              <div className="px-5 py-4 bg-[#131d31] border-b border-[#1e293b] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Edit3 className="w-5 h-5 text-[#3b82f6]" />
                  <h3 className="text-sm font-semibold text-white">Workbook Study Notes</h3>
                </div>
                <button 
                  onClick={() => setEditingNoteKey(null)}
                  className="text-[#64748b] hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-5">
                <p className="text-xs text-[#94a3b8] mb-3 leading-relaxed bg-[#1e293b]/40 p-2.5 rounded border border-[#1e293b] font-mono">
                  Concept: {editingNoteKey.split('-').slice(2).join('-')}
                </p>
                <textarea
                  value={noteDraft}
                  onChange={(e) => setNoteDraft(e.target.value)}
                  placeholder="Paste code blocks, summarize in your own words, or note key concepts to memorize..."
                  rows={8}
                  className="w-full bg-[#131d31] border border-[#1e293b] rounded-lg p-3 text-xs md:text-sm text-white focus:outline-none focus:border-[#3b82f6] placeholder-[#64748b] font-mono resize-none"
                />
              </div>

              <div className="px-5 py-4 bg-[#131d31] border-t border-[#1e293b] flex justify-end gap-2">
                <button
                  onClick={() => setEditingNoteKey(null)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-[#94a3b8] hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveNote}
                  className="px-4 py-2 bg-[#3b82f6] hover:bg-[#3b82f6]/95 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-md transition-all"
                >
                  <Save className="w-4 h-4" />
                  Save Note
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Humble Footer */}
      <footer className="border-t border-[#1e293b] bg-[#070a13] py-6 px-6 mt-12 text-center text-xs text-[#475569]">
        <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            Crafted for Software & AI Engineering Mastery. All concepts and roadmaps fully indexed.
          </p>
          <div className="flex gap-4">
            <span className="font-semibold text-[#10b981] flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#10b981]" /> All Modules Validated
            </span>
            <span>Local Memory Enabled</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

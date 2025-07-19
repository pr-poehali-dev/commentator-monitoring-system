import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const Index = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isTeamDialogOpen, setIsTeamDialogOpen] = useState(false);
  const [isEditMatchOpen, setIsEditMatchOpen] = useState(false);
  const [isDeleteMatchOpen, setIsDeleteMatchOpen] = useState(false);
  const [isAddMatchOpen, setIsAddMatchOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);
  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState(false);
  const [isAddCommentatorOpen, setIsAddCommentatorOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isEditAssignmentOpen, setIsEditAssignmentOpen] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [isDeleteAssignmentOpen, setIsDeleteAssignmentOpen] = useState(false);
  const [selectedCommentator, setSelectedCommentator] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedMatch, setSelectedMatch] = useState(null);
  const commentators = [
    {
      id: 1,
      name: "Александр Волков",
      rating: 4.8,
      matches: 45,
      lastMatch: "СКА - ЦСКА",
      avatar: "/img/c4c82d8d-032d-4ce2-b66a-b5f87de7b0dd.jpg",
      status: "active",
    },
    {
      id: 2,
      name: "Дмитрий Петров",
      rating: 4.6,
      matches: 38,
      lastMatch: "Динамо - Спартак",
      avatar: "/img/c4c82d8d-032d-4ce2-b66a-b5f87de7b0dd.jpg",
      status: "active",
    },
    {
      id: 3,
      name: "Михаил Сидоров",
      rating: 4.3,
      matches: 52,
      lastMatch: "Локомотив - Йокерит",
      avatar: "/img/c4c82d8d-032d-4ce2-b66a-b5f87de7b0dd.jpg",
      status: "scheduled",
    },
  ];

  const upcomingMatches = [
    {
      id: 1,
      date: "2024-01-20",
      time: "19:30",
      teams: "СКА - ЦСКА",
      commentators: [
        { name: "Александр Волков", role: "Ведущий", status: "confirmed" },
        { name: "Дмитрий Петров", role: "Эксперт", status: "assigned" }
      ],
      status: "assigned",
    },
    {
      id: 2,
      date: "2024-01-21",
      time: "18:00",
      teams: "Динамо - Спартак",
      commentators: [],
      status: "unassigned",
    },
    {
      id: 3,
      date: "2024-01-22",
      time: "20:00",
      teams: "Локомотив - Йокерит",
      commentators: [
        { name: "Михаил Сидоров", role: "Ведущий", status: "confirmed" },
        { name: null, role: "Эксперт", status: "unassigned" }
      ],
      status: "partial",
    },
  ];

  const completedMatches = [
    {
      id: 1,
      date: "2024-01-15",
      time: "19:30",
      teams: "СКА - ЦСКА",
      commentators: [
        { 
          name: "Александр Волков", 
          role: "Ведущий", 
          rating: 4.8,
          feedback: "Отличная работа, четкие комментарии"
        },
        { 
          name: "Дмитрий Петров", 
          role: "Эксперт", 
          rating: 4.6,
          feedback: "Хорошая аналитика"
        }
      ]
    },
    {
      id: 2,
      date: "2024-01-14",
      time: "18:00",
      teams: "Динамо - Спартак",
      commentators: [
        { 
          name: "Дмитрий Петров", 
          role: "Ведущий", 
          rating: 4.6,
          feedback: "Хорошая подача, небольшие заминки"
        },
        { 
          name: "Михаил Сидоров", 
          role: "Эксперт", 
          rating: null,
          feedback: null
        }
      ]
    },
    {
      id: 3,
      date: "2024-01-13",
      time: "20:00",
      teams: "Локомотив - Йокерит",
      commentators: [
        { 
          name: "Михаил Сидоров", 
          role: "Ведущий", 
          rating: null,
          feedback: null
        }
      ]
    }
  ];

  const stats = [
    { label: "Всего комментаторов", value: "24", change: "+2" },
    { label: "Матчей в месяц", value: "156", change: "+12" },
    { label: "Средний рейтинг", value: "4.5", change: "+0.1" },
    { label: "Активных назначений", value: "18", change: "+3" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Mic" className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  ХоккейКомментарии
                </h1>
                <p className="text-sm text-gray-500">
                  Система мониторинга комментаторов
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Dialog open={isExportOpen} onOpenChange={setIsExportOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Icon name="Download" className="w-4 h-4 mr-2" />
                    Экспорт отчета
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[400px]">
                  <DialogHeader>
                    <DialogTitle>Экспорт отчета</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="report-type">Тип отчета</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите тип отчета" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="matches">Отчет по матчам</SelectItem>
                          <SelectItem value="commentators">Отчет по комментаторам</SelectItem>
                          <SelectItem value="ratings">Отчет по рейтингам</SelectItem>
                          <SelectItem value="schedule">Отчет по расписанию</SelectItem>
                          <SelectItem value="full">Полный отчет</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="start-date">Период с</Label>
                        <Input id="start-date" type="date" />
                      </div>
                      <div>
                        <Label htmlFor="end-date">по</Label>
                        <Input id="end-date" type="date" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="format">Формат файла</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите формат" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="excel">Excel (.xlsx)</SelectItem>
                          <SelectItem value="csv">CSV (.csv)</SelectItem>
                          <SelectItem value="pdf">PDF (.pdf)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex justify-end space-x-2 pt-4">
                      <Button variant="outline" onClick={() => setIsExportOpen(false)}>
                        Отмена
                      </Button>
                      <Button onClick={() => setIsExportOpen(false)}>
                        <Icon name="Download" className="w-4 h-4 mr-2" />
                        Скачать
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              <Button size="sm">
                <Icon name="Plus" className="w-4 h-4 mr-2" />
                Добавить матч
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                </div>
                <div className="text-sm text-green-600 font-medium">
                  {stat.change}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="dashboard">Дашборд</TabsTrigger>
            <TabsTrigger value="matches">Управление матчами</TabsTrigger>
            <TabsTrigger value="commentators">Комментаторы</TabsTrigger>
            <TabsTrigger value="analytics">Аналитика</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Top Commentators */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Топ комментаторы</h3>
                  <Icon name="TrendingUp" className="w-5 h-5 text-gray-500" />
                </div>
                <div className="space-y-4">
                  {commentators.map((commentator) => (
                    <div
                      key={commentator.id}
                      className="flex items-center space-x-3"
                    >
                      <img
                        src={commentator.avatar}
                        alt={commentator.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">
                          {commentator.name}
                        </p>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            <Icon
                              name="Star"
                              className="w-4 h-4 text-yellow-400 fill-current"
                            />
                            <span className="text-sm text-gray-600 ml-1">
                              {commentator.rating}
                            </span>
                          </div>
                          <span className="text-sm text-gray-500">
                            • {commentator.matches} матчей
                          </span>
                        </div>
                      </div>
                      <Badge
                        variant={
                          commentator.status === "active"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {commentator.status === "active"
                          ? "Активен"
                          : "Запланирован"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Recent Activity */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Последние матчи</h3>
                  <Icon name="Clock" className="w-5 h-5 text-gray-500" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">СКА - ЦСКА</p>
                      <p className="text-xs text-gray-500">
                        Александр Волков • Рейтинг: 4.9
                      </p>
                    </div>
                    <span className="text-xs text-gray-500">2 ч назад</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Динамо - Спартак</p>
                      <p className="text-xs text-gray-500">
                        Дмитрий Петров • Рейтинг: 4.7
                      </p>
                    </div>
                    <span className="text-xs text-gray-500">1 день назад</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Локомотив - Йокерит</p>
                      <p className="text-xs text-gray-500">
                        Михаил Сидоров • Рейтинг: 4.3
                      </p>
                    </div>
                    <span className="text-xs text-gray-500">2 дня назад</span>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="matches" className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Управление матчами</h3>
                <Dialog open={isAddMatchOpen} onOpenChange={setIsAddMatchOpen}>
                  <DialogTrigger asChild>
                    <Button size="sm">
                      <Icon name="Plus" className="w-4 h-4 mr-2" />
                      Добавить матч
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle>Добавить новый матч</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="team1">Команда 1</Label>
                          <Input id="team1" placeholder="Название команды" />
                        </div>
                        <div>
                          <Label htmlFor="team2">Команда 2</Label>
                          <Input id="team2" placeholder="Название команды" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="date">Дата</Label>
                          <Input id="date" type="date" />
                        </div>
                        <div>
                          <Label htmlFor="time">Время</Label>
                          <Input id="time" type="time" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="venue">Площадка</Label>
                        <Input id="venue" placeholder="Место проведения" />
                      </div>
                      <div>
                        <Label htmlFor="type">Тип матча</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите тип" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="regular">Регулярный чемпионат</SelectItem>
                            <SelectItem value="playoff">Плей-офф</SelectItem>
                            <SelectItem value="friendly">Товарищеский</SelectItem>
                            <SelectItem value="cup">Кубок</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="priority">Приоритет</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите приоритет" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="high">Высокий</SelectItem>
                            <SelectItem value="medium">Средний</SelectItem>
                            <SelectItem value="low">Низкий</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex justify-end space-x-2 pt-4">
                        <Button variant="outline" onClick={() => setIsAddMatchOpen(false)}>
                          Отмена
                        </Button>
                        <Button onClick={() => setIsAddMatchOpen(false)}>
                          <Icon name="Plus" className="w-4 h-4 mr-2" />
                          Добавить матч
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                </Button>
              </div>
              
              <Tabs defaultValue="upcoming" className="space-y-4">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="upcoming">Предстоящие</TabsTrigger>
                  <TabsTrigger value="completed">Завершенные</TabsTrigger>
                </TabsList>

                <TabsContent value="upcoming">
                  <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Дата</TableHead>
                    <TableHead>Время</TableHead>
                    <TableHead>Матч</TableHead>
                    <TableHead>Команда комментаторов</TableHead>
                    <TableHead>Статус</TableHead>
                    <TableHead>Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {upcomingMatches.map((match) => (
                    <TableRow key={match.id}>
                      <TableCell className="font-medium">
                        {match.date}
                      </TableCell>
                      <TableCell>{match.time}</TableCell>
                      <TableCell>{match.teams}</TableCell>
                      <TableCell>
                        {match.commentators.length > 0 ? (
                          <div className="space-y-2">
                            {match.commentators.map((commentator, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <Badge variant="outline" className="text-xs">
                                  {commentator.role}
                                </Badge>
                                {commentator.name ? (
                                  <span className="font-medium text-sm">{commentator.name}</span>
                                ) : (
                                  <span className="text-gray-500 text-sm">Не назначен</span>
                                )}
                                <Badge 
                                  variant={
                                    commentator.status === "confirmed" ? "default" : 
                                    commentator.status === "assigned" ? "secondary" : "destructive"
                                  }
                                  className="text-xs"
                                >
                                  {commentator.status === "confirmed" ? "✓" : 
                                   commentator.status === "assigned" ? "?" : "×"}
                                </Badge>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <span className="text-gray-500">Команда не назначена</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            match.status === "confirmed"
                              ? "default"
                              : match.status === "assigned"
                                ? "secondary"
                                : match.status === "partial"
                                  ? "outline"
                                  : "destructive"
                          }
                        >
                          {match.status === "confirmed"
                            ? "Подтвержден"
                            : match.status === "assigned"
                              ? "Назначен"
                              : match.status === "partial"
                                ? "Частично"
                                : "Не назначен"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Dialog open={isTeamDialogOpen} onOpenChange={setIsTeamDialogOpen}>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm" onClick={() => setSelectedMatch(match)}>
                                <Icon name="Users" className="w-4 h-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[600px]">
                              <DialogHeader>
                                <DialogTitle>Управление командой комментаторов</DialogTitle>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div className="border rounded-lg p-4 bg-gray-50">
                                  <div className="flex justify-between items-center mb-2">
                                    <h4 className="font-medium">Матч: {selectedMatch?.teams}</h4>
                                    <Badge variant="outline">{selectedMatch?.date} в {selectedMatch?.time}</Badge>
                                  </div>
                                  <p className="text-sm text-gray-600">
                                    Статус: <Badge variant={selectedMatch?.status === "confirmed" ? "default" : "secondary"}>
                                      {selectedMatch?.status === "confirmed" ? "Подтвержден" : "Назначен"}
                                    </Badge>
                                  </p>
                                </div>
                                
                                <div className="space-y-3">
                                  <div className="flex justify-between items-center">
                                    <h4 className="font-medium">Текущая команда</h4>
                                    <Button size="sm" variant="outline">
                                      <Icon name="UserPlus" className="w-4 h-4 mr-2" />
                                      Добавить
                                    </Button>
                                  </div>
                                  
                                  <div className="space-y-2">
                                    {selectedMatch?.commentators?.map((commentator, index) => (
                                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                                        <div className="flex items-center space-x-3">
                                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                            <Icon name="User" className="w-4 h-4 text-blue-600" />
                                          </div>
                                          <div>
                                            <p className="font-medium">{commentator.name || "Не назначен"}</p>
                                            <div className="flex items-center space-x-2">
                                              <Badge variant="outline" className="text-xs">
                                                {commentator.role}
                                              </Badge>
                                              <Badge 
                                                variant={
                                                  commentator.status === "confirmed" ? "default" : 
                                                  commentator.status === "assigned" ? "secondary" : "destructive"
                                                }
                                                className="text-xs"
                                              >
                                                {commentator.status === "confirmed" ? "Подтвержден" : 
                                                 commentator.status === "assigned" ? "Назначен" : "Ожидает"}
                                              </Badge>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex space-x-2">
                                          <Dialog open={isEditAssignmentOpen} onOpenChange={setIsEditAssignmentOpen}>
                                            <DialogTrigger asChild>
                                              <Button variant="outline" size="sm" onClick={() => setSelectedCommentator(commentator)}>
                                                <Icon name="Edit" className="w-4 h-4" />
                                              </Button>
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-[400px]">
                                              <DialogHeader>
                                                <DialogTitle>Редактировать назначение</DialogTitle>
                                              </DialogHeader>
                                              <div className="space-y-4">
                                                <div className="border rounded-lg p-3 bg-gray-50">
                                                  <div className="flex items-center space-x-3">
                                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                                      <Icon name="User" className="w-4 h-4 text-blue-600" />
                                                    </div>
                                                    <div>
                                                      <p className="font-medium text-sm">{selectedCommentator?.name}</p>
                                                      <p className="text-xs text-gray-600">Текущая роль: {selectedCommentator?.role}</p>
                                                    </div>
                                                  </div>
                                                </div>
                                                
                                                <div>
                                                  <Label htmlFor="new-role">Новая роль</Label>
                                                  <Select defaultValue={selectedCommentator?.role}>
                                                    <SelectTrigger>
                                                      <SelectValue placeholder="Выберите роль" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                      <SelectItem value="host">Ведущий</SelectItem>
                                                      <SelectItem value="expert">Эксперт</SelectItem>
                                                      <SelectItem value="analyst">Аналитик</SelectItem>
                                                      <SelectItem value="reporter">Репортер</SelectItem>
                                                    </SelectContent>
                                                  </Select>
                                                </div>
                                                
                                                <div>
                                                  <Label htmlFor="status">Статус</Label>
                                                  <Select defaultValue={selectedCommentator?.status}>
                                                    <SelectTrigger>
                                                      <SelectValue placeholder="Выберите статус" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                      <SelectItem value="assigned">Назначен</SelectItem>
                                                      <SelectItem value="confirmed">Подтвержден</SelectItem>
                                                      <SelectItem value="pending">Ожидает подтверждения</SelectItem>
                                                    </SelectContent>
                                                  </Select>
                                                </div>
                                                
                                                <div>
                                                  <Label htmlFor="notes">Примечания</Label>
                                                  <textarea
                                                    id="notes"
                                                    className="w-full mt-2 p-3 border rounded-lg resize-none h-16"
                                                    placeholder="Дополнительные заметки..."
                                                  />
                                                </div>
                                                
                                                <div className="flex justify-end space-x-2 pt-4">
                                                  <Button variant="outline" onClick={() => setIsEditAssignmentOpen(false)}>
                                                    Отмена
                                                  </Button>
                                                  <Button onClick={() => setIsEditAssignmentOpen(false)}>
                                                    <Icon name="Check" className="w-4 h-4 mr-2" />
                                                    Сохранить
                                                  </Button>
                                                </div>
                                              </div>
                                            </DialogContent>
                                          </Dialog>
                                          
                                          <Dialog open={isMessageOpen} onOpenChange={setIsMessageOpen}>
                                            <DialogTrigger asChild>
                                              <Button variant="outline" size="sm" onClick={() => setSelectedCommentator(commentator)}>
                                                <Icon name="MessageSquare" className="w-4 h-4" />
                                              </Button>
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-[500px]">
                                              <DialogHeader>
                                                <DialogTitle>Отправить сообщение</DialogTitle>
                                              </DialogHeader>
                                              <div className="space-y-4">
                                                <div className="border rounded-lg p-3 bg-gray-50">
                                                  <div className="flex items-center space-x-3">
                                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                                      <Icon name="User" className="w-4 h-4 text-blue-600" />
                                                    </div>
                                                    <div>
                                                      <p className="font-medium text-sm">{selectedCommentator?.name}</p>
                                                      <p className="text-xs text-gray-600">{selectedCommentator?.role} • {selectedMatch?.teams}</p>
                                                    </div>
                                                  </div>
                                                </div>
                                                
                                                <div>
                                                  <Label htmlFor="message-type">Тип сообщения</Label>
                                                  <Select>
                                                    <SelectTrigger>
                                                      <SelectValue placeholder="Выберите тип" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                      <SelectItem value="reminder">Напоминание</SelectItem>
                                                      <SelectItem value="instruction">Инструкция</SelectItem>
                                                      <SelectItem value="schedule">Изменение расписания</SelectItem>
                                                      <SelectItem value="general">Общее сообщение</SelectItem>
                                                    </SelectContent>
                                                  </Select>
                                                </div>
                                                
                                                <div>
                                                  <Label htmlFor="subject">Тема</Label>
                                                  <Input id="subject" placeholder="Тема сообщения" />
                                                </div>
                                                
                                                <div>
                                                  <Label htmlFor="message-text">Сообщение</Label>
                                                  <textarea
                                                    id="message-text"
                                                    className="w-full mt-2 p-3 border rounded-lg resize-none h-24"
                                                    placeholder="Введите текст сообщения..."
                                                  />
                                                </div>
                                                
                                                <div className="flex items-center space-x-2">
                                                  <input type="checkbox" id="urgent" className="rounded" />
                                                  <Label htmlFor="urgent" className="text-sm">Срочное сообщение</Label>
                                                </div>
                                                
                                                <div className="flex justify-end space-x-2 pt-4">
                                                  <Button variant="outline" onClick={() => setIsMessageOpen(false)}>
                                                    Отмена
                                                  </Button>
                                                  <Button onClick={() => setIsMessageOpen(false)}>
                                                    <Icon name="Send" className="w-4 h-4 mr-2" />
                                                    Отправить
                                                  </Button>
                                                </div>
                                              </div>
                                            </DialogContent>
                                          </Dialog>
                                          
                                          <Dialog open={isDeleteAssignmentOpen} onOpenChange={setIsDeleteAssignmentOpen}>
                                            <DialogTrigger asChild>
                                              <Button variant="outline" size="sm" onClick={() => setSelectedCommentator(commentator)}>
                                                <Icon name="Trash2" className="w-4 h-4" />
                                              </Button>
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-[400px]">
                                              <DialogHeader>
                                                <DialogTitle>Удалить из команды</DialogTitle>
                                              </DialogHeader>
                                              <div className="space-y-4">
                                                <div className="border rounded-lg p-4 bg-red-50 border-red-200">
                                                  <div className="flex items-center space-x-3">
                                                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                                                      <Icon name="AlertTriangle" className="w-5 h-5 text-red-600" />
                                                    </div>
                                                    <div>
                                                      <p className="font-medium text-red-900">Подтвердите удаление</p>
                                                      <p className="text-sm text-red-700">
                                                        Вы уверены, что хотите удалить {selectedCommentator?.name} из команды матча?
                                                      </p>
                                                    </div>
                                                  </div>
                                                </div>
                                                
                                                <div className="border rounded-lg p-3 bg-gray-50">
                                                  <div className="flex items-center space-x-3">
                                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                                      <Icon name="User" className="w-4 h-4 text-blue-600" />
                                                    </div>
                                                    <div>
                                                      <p className="font-medium text-sm">{selectedCommentator?.name}</p>
                                                      <p className="text-xs text-gray-600">{selectedCommentator?.role} • {selectedMatch?.teams}</p>
                                                    </div>
                                                  </div>
                                                </div>
                                                
                                                <div>
                                                  <Label htmlFor="reason">Причина удаления (необязательно)</Label>
                                                  <Select>
                                                    <SelectTrigger>
                                                      <SelectValue placeholder="Выберите причину" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                      <SelectItem value="unavailable">Недоступен</SelectItem>
                                                      <SelectItem value="replacement">Замена</SelectItem>
                                                      <SelectItem value="performance">Проблемы с качеством</SelectItem>
                                                      <SelectItem value="schedule">Конфликт расписания</SelectItem>
                                                      <SelectItem value="other">Другое</SelectItem>
                                                    </SelectContent>
                                                  </Select>
                                                </div>
                                                
                                                <div className="flex items-center space-x-2">
                                                  <input type="checkbox" id="notify" className="rounded" defaultChecked />
                                                  <Label htmlFor="notify" className="text-sm">Уведомить комментатора об удалении</Label>
                                                </div>
                                                
                                                <div className="flex justify-end space-x-2 pt-4">
                                                  <Button variant="outline" onClick={() => setIsDeleteAssignmentOpen(false)}>
                                                    Отмена
                                                  </Button>
                                                  <Button variant="destructive" onClick={() => setIsDeleteAssignmentOpen(false)}>
                                                    <Icon name="Trash2" className="w-4 h-4 mr-2" />
                                                    Удалить
                                                  </Button>
                                                </div>
                                              </div>
                                            </DialogContent>
                                          </Dialog>
                                        </div>
                                      </div>
                                    )) || (
                                      <div className="text-center py-8 text-gray-500">
                                        <Icon name="Users" className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                                        <p>Команда не назначена</p>
                                        <p className="text-sm">Добавьте комментаторов для матча</p>
                                      </div>
                                    )}
                                  </div>
                                </div>
                                
                                <div className="border-t pt-4">
                                  <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-600">
                                      Всего назначено: {selectedMatch?.commentators?.length || 0} из 4
                                    </div>
                                    <div className="flex space-x-2">
                                      <Button variant="outline" onClick={() => setIsTeamDialogOpen(false)}>
                                        Закрыть
                                      </Button>
                                      <Button>
                                        <Icon name="Check" className="w-4 h-4 mr-2" />
                                        Подтвердить команду
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm" onClick={() => setSelectedMatch(match)}>
                                <Icon name="UserPlus" className="w-4 h-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                              <DialogHeader>
                                <DialogTitle>Назначить комментатора</DialogTitle>
                              </DialogHeader>
                              <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label htmlFor="match" className="text-right">
                                    Матч
                                  </Label>
                                  <Input
                                    id="match"
                                    value={selectedMatch?.teams || ""}
                                    className="col-span-3"
                                    disabled
                                  />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label htmlFor="role" className="text-right">
                                    Роль
                                  </Label>
                                  <Select value={selectedRole} onValueChange={setSelectedRole}>
                                    <SelectTrigger className="col-span-3">
                                      <SelectValue placeholder="Выберите роль" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="host">Ведущий</SelectItem>
                                      <SelectItem value="expert">Эксперт</SelectItem>
                                      <SelectItem value="analyst">Аналитик</SelectItem>
                                      <SelectItem value="reporter">Репортер</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label htmlFor="commentator" className="text-right">
                                    Комментатор
                                  </Label>
                                  <Select value={selectedCommentator} onValueChange={setSelectedCommentator}>
                                    <SelectTrigger className="col-span-3">
                                      <SelectValue placeholder="Выберите комментатора" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      {commentators.map((commentator) => (
                                        <SelectItem key={commentator.id} value={commentator.id.toString()}>
                                          <div className="flex items-center space-x-2">
                                            <span>{commentator.name}</span>
                                            <Badge variant="secondary" className="text-xs">
                                              ★ {commentator.rating}
                                            </Badge>
                                          </div>
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label htmlFor="status" className="text-right">
                                    Статус
                                  </Label>
                                  <Select defaultValue="assigned">
                                    <SelectTrigger className="col-span-3">
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="assigned">Назначен</SelectItem>
                                      <SelectItem value="confirmed">Подтвержден</SelectItem>
                                      <SelectItem value="pending">Ожидает</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                              </div>
                              <div className="flex justify-end space-x-2">
                                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                                  Отмена
                                </Button>
                                <Button onClick={() => {
                                  // Логика добавления комментатора
                                  setIsDialogOpen(false);
                                  setSelectedCommentator("");
                                  setSelectedRole("");
                                  setSelectedMatch(null);
                                }}>
                                  Назначить
                                </Button>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
                </TabsContent>

                <TabsContent value="completed">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Дата</TableHead>
                        <TableHead>Время</TableHead>
                        <TableHead>Матч</TableHead>
                        <TableHead>Команда комментаторов</TableHead>
                        <TableHead>Рейтинги</TableHead>
                        <TableHead>Действия</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {completedMatches.map((match) => (
                        <TableRow key={match.id}>
                          <TableCell className="font-medium">
                            {match.date}
                          </TableCell>
                          <TableCell>{match.time}</TableCell>
                          <TableCell>{match.teams}</TableCell>
                          <TableCell>
                            <div className="space-y-2">
                              {match.commentators.map((commentator, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                  <Badge variant="outline" className="text-xs">
                                    {commentator.role}
                                  </Badge>
                                  <span className="font-medium text-sm">{commentator.name}</span>
                                </div>
                              ))}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-2">
                              {match.commentators.map((commentator, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                  {commentator.rating ? (
                                    <div className="flex items-center space-x-1">
                                      <Icon name="Star" className="w-4 h-4 text-yellow-400 fill-current" />
                                      <span className="font-medium text-sm">{commentator.rating}</span>
                                    </div>
                                  ) : (
                                    <Dialog open={isRatingOpen} onOpenChange={setIsRatingOpen}>
                                      <DialogTrigger asChild>
                                        <Button variant="outline" size="sm" onClick={() => setSelectedCommentator(commentator)}>
                                          <Icon name="Star" className="w-4 h-4 mr-1" />
                                          Оценить
                                        </Button>
                                      </DialogTrigger>
                                      <DialogContent className="sm:max-w-[500px]">
                                        <DialogHeader>
                                          <DialogTitle>Оценить работу комментатора</DialogTitle>
                                        </DialogHeader>
                                        <div className="space-y-4">
                                          <div className="border rounded-lg p-4 bg-gray-50">
                                            <div className="flex items-center space-x-3">
                                              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                                <Icon name="User" className="w-5 h-5 text-blue-600" />
                                              </div>
                                              <div>
                                                <p className="font-medium">{selectedCommentator?.name}</p>
                                                <p className="text-sm text-gray-600">{selectedCommentator?.role}</p>
                                              </div>
                                            </div>
                                          </div>
                                          
                                          <div>
                                            <Label htmlFor="rating">Рейтинг (1-5 звезд)</Label>
                                            <div className="flex space-x-2 mt-2">
                                              {[1, 2, 3, 4, 5].map((star) => (
                                                <button
                                                  key={star}
                                                  type="button"
                                                  className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded"
                                                >
                                                  <Icon name="Star" className="w-6 h-6 text-gray-300 hover:text-yellow-400" />
                                                </button>
                                              ))}
                                            </div>
                                          </div>
                                          
                                          <div>
                                            <Label htmlFor="review">Отзыв о работе</Label>
                                            <textarea
                                              id="review"
                                              className="w-full mt-2 p-3 border rounded-lg resize-none h-24"
                                              placeholder="Оставьте отзыв о качестве комментирования..."
                                            />
                                          </div>
                                          
                                          <div>
                                            <Label htmlFor="categories">Оценка по критериям</Label>
                                            <div className="space-y-2 mt-2">
                                              {[
                                                { label: "Знание игры", key: "knowledge" },
                                                { label: "Эмоциональность", key: "emotion" },
                                                { label: "Четкость речи", key: "clarity" },
                                                { label: "Взаимодействие с коллегой", key: "teamwork" }
                                              ].map((criteria) => (
                                                <div key={criteria.key} className="flex justify-between items-center">
                                                  <span className="text-sm">{criteria.label}</span>
                                                  <div className="flex space-x-1">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                      <Icon key={star} name="Star" className="w-4 h-4 text-gray-300 hover:text-yellow-400 cursor-pointer" />
                                                    ))}
                                                  </div>
                                                </div>
                                              ))}
                                            </div>
                                          </div>
                                          
                                          <div className="flex justify-end space-x-2 pt-4">
                                            <Button variant="outline" onClick={() => setIsRatingOpen(false)}>
                                              Отмена
                                            </Button>
                                            <Button onClick={() => setIsRatingOpen(false)}>
                                              <Icon name="Star" className="w-4 h-4 mr-2" />
                                              Сохранить оценку
                                            </Button>
                                          </div>
                                        </div>
                                      </DialogContent>
                                    </Dialog>
                                  )}
                                </div>
                              ))}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Dialog open={isReviewsOpen} onOpenChange={setIsReviewsOpen}>
                                <DialogTrigger asChild>
                                  <Button variant="outline" size="sm" onClick={() => setSelectedMatch(match)}>
                                    <Icon name="MessageSquare" className="w-4 h-4" />
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[600px]">
                                  <DialogHeader>
                                    <DialogTitle>Отзывы о матче</DialogTitle>
                                  </DialogHeader>
                                  <div className="space-y-4">
                                    <div className="border rounded-lg p-4 bg-gray-50">
                                      <h4 className="font-medium mb-2">Матч: {selectedMatch?.teams}</h4>
                                      <p className="text-sm text-gray-600">{selectedMatch?.date} в {selectedMatch?.time}</p>
                                    </div>
                                    
                                    <div className="space-y-4 max-h-96 overflow-y-auto">
                                      {selectedMatch?.commentators?.map((commentator, index) => (
                                        <div key={index} className="border rounded-lg p-4">
                                          <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center space-x-3">
                                              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                                <Icon name="User" className="w-4 h-4 text-blue-600" />
                                              </div>
                                              <div>
                                                <p className="font-medium">{commentator.name}</p>
                                                <p className="text-sm text-gray-600">{commentator.role}</p>
                                              </div>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                              <Icon name="Star" className="w-4 h-4 text-yellow-400 fill-current" />
                                              <span className="font-medium">{commentator.rating || "Не оценен"}</span>
                                            </div>
                                          </div>
                                          
                                          <div className="space-y-2">
                                            <p className="text-sm text-gray-700">
                                              "Отличное комментирование, эмоциональная подача, хорошее знание игроков и статистики."
                                            </p>
                                            <div className="flex justify-between text-xs text-gray-500">
                                              <span>Администратор системы</span>
                                              <span>2 часа назад</span>
                                            </div>
                                          </div>
                                        </div>
                                      )) || (
                                        <div className="text-center py-8 text-gray-500">
                                          <Icon name="MessageSquare" className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                                          <p>Отзывов пока нет</p>
                                        </div>
                                      )}
                                    </div>
                                    
                                    <div className="flex justify-end pt-4">
                                      <Button variant="outline" onClick={() => setIsReviewsOpen(false)}>
                                        Закрыть
                                      </Button>
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                              
                              <Dialog open={isAnalyticsOpen} onOpenChange={setIsAnalyticsOpen}>
                                <DialogTrigger asChild>
                                  <Button variant="outline" size="sm" onClick={() => setSelectedMatch(match)}>
                                    <Icon name="BarChart3" className="w-4 h-4" />
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[700px]">
                                  <DialogHeader>
                                    <DialogTitle>Аналитика матча</DialogTitle>
                                  </DialogHeader>
                                  <div className="space-y-6">
                                    <div className="border rounded-lg p-4 bg-gray-50">
                                      <h4 className="font-medium mb-2">Матч: {selectedMatch?.teams}</h4>
                                      <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>Дата: {selectedMatch?.date}</div>
                                        <div>Время: {selectedMatch?.time}</div>
                                        <div>Статус: Завершен</div>
                                        <div>Длительность: 2ч 47мин</div>
                                      </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-6">
                                      <div>
                                        <h4 className="font-medium mb-4">Статистика команды</h4>
                                        <div className="space-y-3">
                                          <div className="flex justify-between items-center">
                                            <span className="text-sm">Средний рейтинг</span>
                                            <div className="flex items-center space-x-1">
                                              <Icon name="Star" className="w-4 h-4 text-yellow-400 fill-current" />
                                              <span className="font-medium">4.7</span>
                                            </div>
                                          </div>
                                          <div className="flex justify-between items-center">
                                            <span className="text-sm">Время в эфире</span>
                                            <span className="font-medium">2ч 47мин</span>
                                          </div>
                                          <div className="flex justify-between items-center">
                                            <span className="text-sm">Количество отзывов</span>
                                            <span className="font-medium">12</span>
                                          </div>
                                        </div>
                                      </div>
                                      
                                      <div>
                                        <h4 className="font-medium mb-4">Оценки по критериям</h4>
                                        <div className="space-y-3">
                                          {[
                                            { label: "Знание игры", value: 4.8 },
                                            { label: "Эмоциональность", value: 4.6 },
                                            { label: "Четкость речи", value: 4.9 },
                                            { label: "Взаимодействие", value: 4.5 }
                                          ].map((criteria) => (
                                            <div key={criteria.label} className="space-y-1">
                                              <div className="flex justify-between text-sm">
                                                <span>{criteria.label}</span>
                                                <span className="font-medium">{criteria.value}</span>
                                              </div>
                                              <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div 
                                                  className="bg-blue-600 h-2 rounded-full" 
                                                  style={{ width: `${(criteria.value / 5) * 100}%` }}
                                                ></div>
                                              </div>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                    
                                    <div>
                                      <h4 className="font-medium mb-4">Индивидуальные показатели</h4>
                                      <div className="space-y-2">
                                        {selectedMatch?.commentators?.map((commentator, index) => (
                                          <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                                            <div className="flex items-center space-x-3">
                                              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                                <Icon name="User" className="w-4 h-4 text-blue-600" />
                                              </div>
                                              <div>
                                                <p className="font-medium text-sm">{commentator.name}</p>
                                                <p className="text-xs text-gray-600">{commentator.role}</p>
                                              </div>
                                            </div>
                                            <div className="flex items-center space-x-4 text-sm">
                                              <div className="text-center">
                                                <div className="font-medium">{commentator.rating || "N/A"}</div>
                                                <div className="text-xs text-gray-500">Рейтинг</div>
                                              </div>
                                              <div className="text-center">
                                                <div className="font-medium">45мин</div>
                                                <div className="text-xs text-gray-500">Время</div>
                                              </div>
                                            </div>
                                          </div>
                                        )) || (
                                          <p className="text-center py-4 text-gray-500">Данные не найдены</p>
                                        )}
                                      </div>
                                    </div>
                                    
                                    <div className="flex justify-end space-x-2 pt-4">
                                      <Button variant="outline" onClick={() => setIsAnalyticsOpen(false)}>
                                        Закрыть
                                      </Button>
                                      <Button variant="outline">
                                        <Icon name="Download" className="w-4 h-4 mr-2" />
                                        Экспорт
                                      </Button>
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TabsContent>
              </Tabs>
            </Card>
          </TabsContent>

          <TabsContent value="commentators" className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Профили комментаторов</h3>
                <Dialog open={isAddCommentatorOpen} onOpenChange={setIsAddCommentatorOpen}>
                  <DialogTrigger asChild>
                    <Button size="sm">
                      <Icon name="UserPlus" className="w-4 h-4 mr-2" />
                      Добавить комментатора
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                      <DialogTitle>Добавить нового комментатора</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">Имя</Label>
                          <Input id="firstName" placeholder="Введите имя" />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Фамилия</Label>
                          <Input id="lastName" placeholder="Введите фамилию" />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="email@example.com" />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone">Телефон</Label>
                        <Input id="phone" placeholder="+7 (000) 000-00-00" />
                      </div>
                      
                      <div>
                        <Label htmlFor="specialization">Специализация</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите специализацию" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hockey">Хоккей</SelectItem>
                            <SelectItem value="football">Футбол</SelectItem>
                            <SelectItem value="basketball">Баскетбол</SelectItem>
                            <SelectItem value="tennis">Теннис</SelectItem>
                            <SelectItem value="universal">Универсальный</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="experience">Опыт работы (лет)</Label>
                        <Input id="experience" type="number" min="0" placeholder="0" />
                      </div>
                      
                      <div>
                        <Label htmlFor="role">Предпочитаемая роль</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите роль" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="host">Ведущий</SelectItem>
                            <SelectItem value="expert">Эксперт</SelectItem>
                            <SelectItem value="analyst">Аналитик</SelectItem>
                            <SelectItem value="reporter">Репортер</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="bio">О себе</Label>
                        <textarea
                          id="bio"
                          className="w-full mt-2 p-3 border rounded-lg resize-none h-20"
                          placeholder="Краткая информация о себе и опыте работы..."
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="photo">Фотография</Label>
                        <Input id="photo" type="file" accept="image/*" className="mt-2" />
                      </div>
                    </div>
                    
                    <div className="flex justify-end space-x-2 pt-4">
                      <Button variant="outline" onClick={() => setIsAddCommentatorOpen(false)}>
                        Отмена
                      </Button>
                      <Button onClick={() => setIsAddCommentatorOpen(false)}>
                        <Icon name="UserPlus" className="w-4 h-4 mr-2" />
                        Добавить
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {commentators.map((commentator) => (
                  <Card key={commentator.id} className="p-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <img
                        src={commentator.avatar}
                        alt={commentator.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-medium">{commentator.name}</h4>
                        <div className="flex items-center space-x-1">
                          <Icon
                            name="Star"
                            className="w-4 h-4 text-yellow-400 fill-current"
                          />
                          <span className="text-sm text-gray-600">
                            {commentator.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Матчей проведено:</span>
                        <span className="font-medium">
                          {commentator.matches}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Последний матч:</span>
                        <span className="font-medium">
                          {commentator.lastMatch}
                        </span>
                      </div>
                      <div className="mt-3">
                        <Progress
                          value={commentator.rating * 20}
                          className="h-2"
                        />
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <Dialog open={isProfileOpen} onOpenChange={setIsProfileOpen}>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="flex-1" onClick={() => setSelectedCommentator(commentator)}>
                            <Icon name="Eye" className="w-4 h-4 mr-1" />
                            Профиль
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[700px]">
                          <DialogHeader>
                            <DialogTitle>Профиль комментатора</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                              <img
                                src={selectedCommentator?.avatar || "/img/default-avatar.jpg"}
                                alt={selectedCommentator?.name}
                                className="w-20 h-20 rounded-full object-cover"
                              />
                              <div>
                                <h3 className="text-xl font-semibold">{selectedCommentator?.name}</h3>
                                <p className="text-gray-600">Опыт работы: {selectedCommentator?.matches} матчей</p>
                                <div className="flex items-center space-x-2 mt-2">
                                  <div className="flex items-center space-x-1">
                                    <Icon name="Star" className="w-4 h-4 text-yellow-400 fill-current" />
                                    <span className="font-medium">{selectedCommentator?.rating}</span>
                                  </div>
                                  <Badge variant={selectedCommentator?.status === "active" ? "default" : "secondary"}>
                                    {selectedCommentator?.status === "active" ? "Активен" : "Неактивен"}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-medium mb-4">Статистика</h4>
                                <div className="space-y-3">
                                  <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">Всего матчей</span>
                                    <span className="font-medium">{selectedCommentator?.matches}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">Средний рейтинг</span>
                                    <span className="font-medium">{selectedCommentator?.rating}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">Последний матч</span>
                                    <span className="font-medium">{selectedCommentator?.lastMatch}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">Специализация</span>
                                    <span className="font-medium">Хоккей</span>
                                  </div>
                                </div>
                              </div>
                              
                              <div>
                                <h4 className="font-medium mb-4">Контактная информация</h4>
                                <div className="space-y-3">
                                  <div className="flex items-center space-x-2">
                                    <Icon name="Mail" className="w-4 h-4 text-gray-400" />
                                    <span className="text-sm">example@email.com</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Icon name="Phone" className="w-4 h-4 text-gray-400" />
                                    <span className="text-sm">+7 (000) 000-00-00</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Icon name="MapPin" className="w-4 h-4 text-gray-400" />
                                    <span className="text-sm">Москва</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-medium mb-4">Недавние матчи</h4>
                              <div className="space-y-2">
                                {[
                                  { date: "15 дек", match: "СКА - ЦСКА", rating: 4.8 },
                                  { date: "12 дек", match: "Динамо - Спартак", rating: 4.6 },
                                  { date: "10 дек", match: "Локомотив - Йокерит", rating: 4.9 }
                                ].map((match, index) => (
                                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                                    <div>
                                      <p className="font-medium text-sm">{match.match}</p>
                                      <p className="text-xs text-gray-600">{match.date}</p>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                      <Icon name="Star" className="w-4 h-4 text-yellow-400 fill-current" />
                                      <span className="font-medium text-sm">{match.rating}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex justify-end space-x-2 pt-4">
                              <Button variant="outline" onClick={() => setIsProfileOpen(false)}>
                                Закрыть
                              </Button>
                              <Button variant="outline">
                                <Icon name="Edit" className="w-4 h-4 mr-2" />
                                Редактировать
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      
                      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="flex-1" onClick={() => setSelectedCommentator(commentator)}>
                            <Icon name="Calendar" className="w-4 h-4 mr-1" />
                            Назначить
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[500px]">
                          <DialogHeader>
                            <DialogTitle>Назначить комментатора на матч</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="border rounded-lg p-4 bg-gray-50">
                              <div className="flex items-center space-x-3">
                                <img
                                  src={selectedCommentator?.avatar || "/img/default-avatar.jpg"}
                                  alt={selectedCommentator?.name}
                                  className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                  <p className="font-medium">{selectedCommentator?.name}</p>
                                  <div className="flex items-center space-x-2">
                                    <Icon name="Star" className="w-4 h-4 text-yellow-400 fill-current" />
                                    <span className="text-sm">{selectedCommentator?.rating}</span>
                                    <span className="text-sm text-gray-600">• {selectedCommentator?.matches} матчей</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div>
                              <Label htmlFor="match-select">Выберите матч</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Доступные матчи" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="match1">СКА - ЦСКА • 20 дек в 19:30</SelectItem>
                                  <SelectItem value="match2">Динамо - Спартак • 22 дек в 20:00</SelectItem>
                                  <SelectItem value="match3">Локомотив - Йокерит • 25 дек в 18:00</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div>
                              <Label htmlFor="role-select">Роль</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Выберите роль" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="host">Ведущий</SelectItem>
                                  <SelectItem value="expert">Эксперт</SelectItem>
                                  <SelectItem value="analyst">Аналитик</SelectItem>
                                  <SelectItem value="reporter">Репортер</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div>
                              <Label htmlFor="priority">Приоритет</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Выберите приоритет" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="high">Высокий</SelectItem>
                                  <SelectItem value="medium">Средний</SelectItem>
                                  <SelectItem value="low">Низкий</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div>
                              <Label htmlFor="notes">Заметки</Label>
                              <textarea
                                id="notes"
                                className="w-full mt-2 p-3 border rounded-lg resize-none h-20"
                                placeholder="Дополнительные заметки для назначения..."
                              />
                            </div>
                            
                            <div className="flex justify-end space-x-2 pt-4">
                              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                                Отмена
                              </Button>
                              <Button onClick={() => setIsDialogOpen(false)}>
                                <Icon name="Calendar" className="w-4 h-4 mr-2" />
                                Назначить
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Статистика рейтингов
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      Отличные (4.5+)
                    </span>
                    <div className="flex items-center space-x-2">
                      <Progress value={75} className="w-24 h-2" />
                      <span className="text-sm font-medium">18</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      Хорошие (4.0-4.4)
                    </span>
                    <div className="flex items-center space-x-2">
                      <Progress value={50} className="w-24 h-2" />
                      <span className="text-sm font-medium">4</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      Средние (3.5-3.9)
                    </span>
                    <div className="flex items-center space-x-2">
                      <Progress value={25} className="w-24 h-2" />
                      <span className="text-sm font-medium">2</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Загруженность</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Январь 2024</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={85} className="w-24 h-2" />
                      <span className="text-sm font-medium">156 матчей</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Февраль 2024</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={70} className="w-24 h-2" />
                      <span className="text-sm font-medium">124 матча</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Март 2024</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={60} className="w-24 h-2" />
                      <span className="text-sm font-medium">98 матчей</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
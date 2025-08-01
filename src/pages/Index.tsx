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
              <Button variant="outline" size="sm">
                <Icon name="Download" className="w-4 h-4 mr-2" />
                Экспорт отчета
              </Button>
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
                <Button size="sm">
                  <Icon name="Plus" className="w-4 h-4 mr-2" />
                  Добавить матч
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
                                          <Button variant="outline" size="sm">
                                            <Icon name="Edit" className="w-4 h-4" />
                                          </Button>
                                          <Button variant="outline" size="sm">
                                            <Icon name="MessageSquare" className="w-4 h-4" />
                                          </Button>
                                          <Button variant="outline" size="sm">
                                            <Icon name="Trash2" className="w-4 h-4" />
                                          </Button>
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
                                    <Button variant="outline" size="sm">
                                      <Icon name="Star" className="w-4 h-4 mr-1" />
                                      Оценить
                                    </Button>
                                  )}
                                </div>
                              ))}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                <Icon name="MessageSquare" className="w-4 h-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Icon name="BarChart3" className="w-4 h-4" />
                              </Button>
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
                <Button size="sm">
                  <Icon name="UserPlus" className="w-4 h-4 mr-2" />
                  Добавить комментатора
                </Button>
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
                      <Button variant="outline" size="sm" className="flex-1">
                        <Icon name="Eye" className="w-4 h-4 mr-1" />
                        Профиль
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Icon name="Calendar" className="w-4 h-4 mr-1" />
                        Назначить
                      </Button>
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
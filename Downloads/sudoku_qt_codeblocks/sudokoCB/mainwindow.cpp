#include "mainwindow.h"
#include "ui_mainwindow.h"

sudoku::matrix matx;

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);
    matx.new_puzzle();
    for (int i = 0; i < 9; ++i)
    {
        for (int j = 0; j < 9; ++j)
        {
            QTableWidgetItem* Cell = ui->table->item(i, j);
            QString str = "";
            str += '0' + matx.read(i, j);
            //if (str=="0") str= "";
            QString cstr = str;
            Cell->setText(cstr);
            Cell->setForeground(Qt::black);
            if (matx.read(i, j))
            {
                QColor c(122,122,235);
                Cell->setBackgroundColor(c);
            }
            else
            {
                Cell->setBackgroundColor(Qt::white);
                Cell->setForeground(Qt::white);
            }
        }
    }
    ui->label->setText("Welcome.");
    ui->label->setStyleSheet("color: blue");
}

MainWindow::~MainWindow()
{
    delete ui;
}

void MainWindow::on_table_cellClicked(int row, int column)
{
    Row = row;
    Column = column;
    QString str = "";
    str += '0' + row;
    str += ',';
    str += '0' + column;
    const QString cstr = str;
    ui->label->setText(cstr);
}

void MainWindow::click__on_pb(int num)
{
    QTableWidgetItem* Cell = ui->table->item(Row, Column);
    matx.write(Row, Column, num);
    QString str = "";
    str += '0' + matx.read(Row, Column);
    const QString cstr = str;
    Cell->setText(cstr);
    Cell->setForeground(Qt::black);
    if (matx.you_win())
    {
        ui->label->setText("you win!!");
    }
}

void MainWindow::on_pb00_1_clicked()
{
   click__on_pb(1);
}

void MainWindow::on_pb00_2_clicked()
{
    click__on_pb(2);
}

void MainWindow::on_pb00_3_clicked()
{
    click__on_pb(3);
}

void MainWindow::on_pb00_4_clicked()
{
    click__on_pb(4);
}

void MainWindow::on_pb00_5_clicked()
{
    click__on_pb(5);
}

void MainWindow::on_pb00_6_clicked()
{
    click__on_pb(6);
}

void MainWindow::on_pb00_7_clicked()
{
    click__on_pb(7);
}

void MainWindow::on_pb00_8_clicked()
{
    click__on_pb(8);
}

void MainWindow::on_pb00_9_clicked()
{
    click__on_pb(9);
}

void MainWindow::on_reset_clicked()
{
    //matx.reset();
    for (int i = 0; i < 9; ++i)
    {
        for (int j = 0; j < 9; ++j)
        {
            QTableWidgetItem* Cell = ui->table->item(i, j);
            QString qcolorname = Cell->backgroundColor().name();
            std::string colorname = qcolorname.toStdString();
            std::string white = "#ffffff";
            if (colorname == white) {
                Cell->setForeground(Qt::white);
            }
        }
    }
    ui->label->setText("Reset! Thanks for using.");
    ui->label->setStyleSheet("color: blue");
}

void MainWindow::on_solve_clicked()
{
    //matx.reset();
    matx.solve();
    for (int i = 0; i < 9; ++i)
	{
        for (int j = 0; j < 9; ++j)
		{
			QTableWidgetItem* Cell = ui->table->item(i, j);
			QString str = "";
            str += '0' + matx.read(i,j);
            //if (str=="0") str= "";
            const QString cstr = str;
			Cell->setText(cstr);
            Cell->setForeground(Qt::black);
		}
	}
    ui->label->setText("Solved! Thanks for using.");
    ui->label->setStyleSheet("color: blue");
}

void MainWindow::on_verify_clicked()
{
    int *mat = (int *)malloc(9 * 9 * sizeof(int));
    int value;
	for (int i = 0; i < 9; ++i)
	{
        for (int j = 0; j < 9; ++j)
		{	
			QTableWidgetItem* Cell = ui->table->item(i, j);
			QString qstr = Cell->text();
            std::string str = qstr.toStdString();
            if (str != "" && isdigit(str[0]))
                value =  atoi(str.c_str());
            else
                value = 0;
            *(mat + i*9 + j) = value;
		}
	}
    bool res = matx.verify (mat);
    if (res)
	{
		ui->label->setText("Correct!");
		ui->label->setStyleSheet("color: green");
	}
	else 
	{
		ui->label->setText("Incorrect!");
		ui->label->setStyleSheet("color: red");	
	}
}

void MainWindow::on_actionPartially_Filled_Grid_triggered()
{ 
    matx.new_puzzle();
    for (int i = 0; i < 9; ++i)
    {
        for (int j = 0; j < 9; ++j)
        {
            QTableWidgetItem* Cell = ui->table->item(i, j);
            QString str = "";
            str += '0' + matx.read(i, j);
            //if (str=="0") str= "";
            const QString cstr = str;
            Cell->setText(cstr);
            Cell->setForeground(Qt::black);
            if (matx.read(i, j))
            {
                QColor c(122,122,235);
                Cell->setBackgroundColor(c);
            }
            else
            {
                Cell->setBackgroundColor(Qt::white);
                Cell->setForeground(Qt::white);
            }
        }
    }
    ui->label->setText("Partially filled grid created.");
    ui->label->setStyleSheet("color: blue");
}

void MainWindow::on_actionBlank_Grid_triggered()
{
    matx.new_puzzle();
    for (int i = 0; i < 9; ++i)
    {
        for (int j = 0; j < 9; ++j)
        {
            QTableWidgetItem* Cell = ui->table->item(i, j);
            QString str = "";
			str += '0' + matx.read(i, j);
            //if (str=="0") str= "";
            const QString cstr = str;
            Cell->setText(cstr);
            if (matx.read(i, j))
            {
                QColor c(122,122,235);
                Cell->setBackgroundColor(c);
                Cell->setForeground(c);
            }
            else
            {
                Cell->setBackgroundColor(Qt::white);
                Cell->setForeground(Qt::white);
            }
        }
    }
    ui->label->setText("Blank grid created.");
    ui->label->setStyleSheet("color: blue");
}

void MainWindow::on_actionExit_triggered()
{
    QApplication::quit();
}

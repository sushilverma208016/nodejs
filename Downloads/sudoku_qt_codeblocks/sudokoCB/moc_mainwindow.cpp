/****************************************************************************
** Meta object code from reading C++ file 'mainwindow.h'
**
** Created by: The Qt Meta Object Compiler version 63 (Qt 4.8.5)
**
** WARNING! All changes made in this file will be lost!
//moc mainwindow.h -o moc_mainwindow.cpp
//http://forums.codeblocks.org/index.php?topic=5379.0
*****************************************************************************/

#include "mainwindow.h"
#if !defined(Q_MOC_OUTPUT_REVISION)
#error "The header file 'mainwindow.h' doesn't include <QObject>."
#elif Q_MOC_OUTPUT_REVISION != 63
#error "This file was generated using the moc from 4.8.5. It"
#error "cannot be used with the include files from this version of Qt."
#error "(The moc has changed too much.)"
#endif

QT_BEGIN_MOC_NAMESPACE
static const uint qt_meta_data_MainWindow[] = {

 // content:
       6,       // revision
       0,       // classname
       0,    0, // classinfo
      16,   14, // methods
       0,    0, // properties
       0,    0, // enums/sets
       0,    0, // constructors
       0,       // flags
       0,       // signalCount

 // slots: signature, parameters, type, tag, flags
      12,   11,   11,   11, 0x08,
      32,   11,   11,   11, 0x08,
      52,   11,   11,   11, 0x08,
      72,   11,   11,   11, 0x08,
      92,   11,   11,   11, 0x08,
     112,   11,   11,   11, 0x08,
     132,   11,   11,   11, 0x08,
     152,   11,   11,   11, 0x08,
     172,   11,   11,   11, 0x08,
     203,  192,   11,   11, 0x08,
     233,   11,   11,   11, 0x08,
     252,   11,   11,   11, 0x08,
     271,   11,   11,   11, 0x08,
     291,   11,   11,   11, 0x08,
     334,   11,   11,   11, 0x08,
     366,   11,   11,   11, 0x08,

       0        // eod
};

static const char qt_meta_stringdata_MainWindow[] = {
    "MainWindow\0\0on_pb00_1_clicked()\0"
    "on_pb00_2_clicked()\0on_pb00_3_clicked()\0"
    "on_pb00_4_clicked()\0on_pb00_5_clicked()\0"
    "on_pb00_6_clicked()\0on_pb00_7_clicked()\0"
    "on_pb00_8_clicked()\0on_pb00_9_clicked()\0"
    "row,column\0on_table_cellClicked(int,int)\0"
    "on_reset_clicked()\0on_solve_clicked()\0"
    "on_verify_clicked()\0"
    "on_actionPartially_Filled_Grid_triggered()\0"
    "on_actionBlank_Grid_triggered()\0"
    "on_actionExit_triggered()\0"
};

void MainWindow::qt_static_metacall(QObject *_o, QMetaObject::Call _c, int _id, void **_a)
{
    if (_c == QMetaObject::InvokeMetaMethod) {
        Q_ASSERT(staticMetaObject.cast(_o));
        MainWindow *_t = static_cast<MainWindow *>(_o);
        switch (_id) {
        case 0: _t->on_pb00_1_clicked(); break;
        case 1: _t->on_pb00_2_clicked(); break;
        case 2: _t->on_pb00_3_clicked(); break;
        case 3: _t->on_pb00_4_clicked(); break;
        case 4: _t->on_pb00_5_clicked(); break;
        case 5: _t->on_pb00_6_clicked(); break;
        case 6: _t->on_pb00_7_clicked(); break;
        case 7: _t->on_pb00_8_clicked(); break;
        case 8: _t->on_pb00_9_clicked(); break;
        case 9: _t->on_table_cellClicked((*reinterpret_cast< int(*)>(_a[1])),(*reinterpret_cast< int(*)>(_a[2]))); break;
        case 10: _t->on_reset_clicked(); break;
        case 11: _t->on_solve_clicked(); break;
        case 12: _t->on_verify_clicked(); break;
        case 13: _t->on_actionPartially_Filled_Grid_triggered(); break;
        case 14: _t->on_actionBlank_Grid_triggered(); break;
        case 15: _t->on_actionExit_triggered(); break;
        default: ;
        }
    }
}

const QMetaObjectExtraData MainWindow::staticMetaObjectExtraData = {
    0,  qt_static_metacall
};

const QMetaObject MainWindow::staticMetaObject = {
    { &QMainWindow::staticMetaObject, qt_meta_stringdata_MainWindow,
      qt_meta_data_MainWindow, &staticMetaObjectExtraData }
};

#ifdef Q_NO_DATA_RELOCATION
const QMetaObject &MainWindow::getStaticMetaObject() { return staticMetaObject; }
#endif //Q_NO_DATA_RELOCATION

const QMetaObject *MainWindow::metaObject() const
{
    return QObject::d_ptr->metaObject ? QObject::d_ptr->metaObject : &staticMetaObject;
}

void *MainWindow::qt_metacast(const char *_clname)
{
    if (!_clname) return 0;
    if (!strcmp(_clname, qt_meta_stringdata_MainWindow))
        return static_cast<void*>(const_cast< MainWindow*>(this));
    return QMainWindow::qt_metacast(_clname);
}

int MainWindow::qt_metacall(QMetaObject::Call _c, int _id, void **_a)
{
    _id = QMainWindow::qt_metacall(_c, _id, _a);
    if (_id < 0)
        return _id;
    if (_c == QMetaObject::InvokeMetaMethod) {
        if (_id < 16)
            qt_static_metacall(this, _c, _id, _a);
        _id -= 16;
    }
    return _id;
}
QT_END_MOC_NAMESPACE

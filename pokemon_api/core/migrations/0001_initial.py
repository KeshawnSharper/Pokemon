# Generated by Django 3.1.5 on 2021-01-14 15:44

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=100)),
                ('name', models.CharField(max_length=100)),
                ('base_experience', models.CharField(max_length=100)),
                ('img', models.CharField(max_length=100)),
                ('move_1_name', models.CharField(max_length=100)),
                ('move_1_text', models.CharField(max_length=100)),
                ('move_1_power', models.IntegerField()),
                ('move_2_name', models.CharField(max_length=100)),
                ('move_2_text', models.CharField(max_length=100)),
                ('move_2_power', models.IntegerField()),
                ('user_id', models.IntegerField()),
            ],
        ),
    ]
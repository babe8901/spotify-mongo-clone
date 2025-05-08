import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Song, SongDocument } from './schemas/song';
import { Model } from 'mongoose';

@Injectable()
export class SongsService {
  constructor(
    @InjectModel(Song.name) private readonly songModel: Model<SongDocument>,
  ) {}

  async create(createSongDto: CreateSongDto): Promise<Song> {
    return await this.songModel.create(createSongDto);
  }

  async findAll() {
    return await this.songModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} song`;
  }

  update(id: number, updateSongDto: UpdateSongDto) {
    return `This action updates a #${id} song`;
  }

  remove(id: number) {
    return `This action removes a #${id} song`;
  }
}
